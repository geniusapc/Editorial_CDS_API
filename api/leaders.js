const router = require("express").Router();
require("express-async-errors");

const cloudinary = require("../model/cloudinary");
const fileUpload = require("express-fileupload");
router.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
  })
);

const Leader = require("../model/leaders");
const auth = require("../middleware/auth");
const { editor } = require("../middleware/auth");

router.get("/", async (req, res) => {
  let Leaders = await Leader.findAll({ order: [["id"]] });
  res.status(200).json(Leaders);
});

router.put("/:title", [auth, editor], async (req, res) => {
  let { title } = req.params;
  let { name, position } = req.body;

  let titleList = ["lgi", "clo", "editor"];
  if (!titleList.includes(title)) {
    let errMsg = `Param must be contained in the list ${JSON.stringify(
      titleList
    )}`;
    return res.status(400).send(errMsg);
  }

  let { error } = Leader.validate({ name, title, position });
  if (error) return res.status(422).send(error.details[0].message);

  let updateFields = { name, position };

  if (req.files && req.files.imagefile) {
    let leaders = await Leader.findOne({
      where: { title: title.toUpperCase() }
    });

    if (leaders.imageId) {
      await cloudinary.uploader.destroy(leaders.imageId);
    }

    let { tempFilePath, mimetype } = req.files.imagefile;
    let { error: imageErr } = Leader.validationImage({ mimetype });
    if (imageErr) return res.status(422).send(error.details[0].message);
    let { url, public_id } = await cloudinary.uploader.upload(tempFilePath);
    updateFields.image = url;
    updateFields.imageId = public_id;
  }

  await Leader.update(updateFields, { where: { title: title.toUpperCase() } });
  return res.status(200).send("profile updated successfully");
});

module.exports = router;
