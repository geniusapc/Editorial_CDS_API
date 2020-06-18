require("express-async-errors");
const router = require("express").Router();
const slugify = require("slugify");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

const cloudinary = require("../model/cloudinary");
const fileUpload = require("express-fileupload");
router.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

const auth = require("../middleware/auth");
const { admin, editor } = require("../middleware/auth");

const Event = require("../model/event");
const Comment = require("../model/comment");

router.get("/", async (req, res, next) => {
  let limit = req.query.limit ? req.query.limit : null;

  let events = await Event.findAll({
    order: [["createdAt", "DESC"]],
    limit,
    include: [{ model: Comment }],
  });
  return res.status(200).json(events);
});

router.get("/search/:title", async (req, res, next) => {
  let limit = req.query.limit ? req.query.limit : null;
  let { title } = req.params;

  let events = await Event.findAll({
    where: {
      title: {
        [Op.iLike]: `%${title}%`,
      },
    },
    order: [["createdAt", "DESC"]],
    limit,
    include: [{ model: Comment }],
  });
  return res.status(200).json(events);
});

router.get("/:slugTitle", async (req, res) => {
  let { slugTitle } = req.params;
  let event = await Event.findOne({
    where: { slugTitle },
    include: [
      {
        model: Comment,
        order: [["createdAt", "DESC"]],
      },
    ],
  });

  if (!event) return res.status(400).send("Event not found");
  return res.status(200).json(event);
});

router.post("/", [auth, admin], async (req, res) => {
  let { text, title, date } = req.body;
  if (!req.files || !req.files.imagefile)
    return res.status(400).send("Image is required");

  let { tempFilePath, mimetype } = req.files.imagefile;

  let { error } = Event.validate({ mimetype, text, title, date });
  if (error) return res.status(422).send(error.details[0].message);

  let slugTitle = slugify(title);
  let { url, public_id } = await cloudinary.uploader.upload(tempFilePath);
  let [data, created] = await Event.findOrCreate({
    where: { slugTitle },
    defaults: { image: url, imageId: public_id, text, title, createdAt: date },
  });
  if (!created) return res.status(400).send("Event already exist");

  return res.status(201).json(data);
});

router.delete("/:id", [auth, admin], async (req, res) => {
  let { id } = req.params;
  let event = await Event.findByPk(id, { attributes: ["imageId"] });
  if (!event) return res.status(400).send("invalid Event id");

  await cloudinary.uploader.destroy(event.imageId);
  Event.destroy({ where: { id } });
  return res.status(200).send("deleted succefully");
});

router.put("/:id", [auth, admin], async (req, res) => {
  let { title, text } = req.body;
  let { id } = req.params;

  let event = await Event.findByPk(id);
  if (!event) return res.status(400).send("Event does not exist");

  let { error: inputError } = Event.validateInputText({ text, title });
  if (inputError) return res.status(422).send(inputError.details[0].message);
  let updateFields = { text, title };

  if (!!req.files && !!req.files.imagefile) {
    await cloudinary.uploader.destroy(event.imageId);
    let { tempFilePath, mimetype } = req.files.imagefile;
    let { error } = Event.validationImage({ mimetype });
    if (error) return res.status(422).send(error.details[0].message);
    let { url, public_id } = await cloudinary.uploader.upload(tempFilePath);
    updateFields.image = url;
    updateFields.imageId = public_id;
  }

  await Event.update(updateFields, { where: { id } });
  return res.status(200).send("Event Updated succefully");
});

router.post("/comment/:eventId", async (req, res) => {
  let { eventId } = req.params;
  let { name, comment } = req.body;
  let { error } = Comment.validate({ eventId, name, comment });

  if (error) return res.status(422).send(error.details[0].message);
  await Comment.create({ name, eventId, comment });

  return res.status(201).send("comments inserted successfully");
});

router.put("/like/id", auth, async (req, res) => {
  // let {slugTitle} = req.params;
  // let event =await Event.findOne({where:{slugTitle}});
  // if(!event) return res.status(400).send('Event not found');
  // if(event.likes.includes(req.user.id)) return res.status(400).send("user already liked this page");
  // let likes = [...event.likes, req.user.id]
  // await Event.update({likes}, {where:{slugTitle}} )
  // return  res.status(200).send("success")
});

module.exports = router;
