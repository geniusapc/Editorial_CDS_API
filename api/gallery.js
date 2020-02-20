const router = require("express").Router();
require("express-async-errors");
const Gallery = require("../model/gallery");

const auth = require("../middleware/auth");
const { admin } = require("../middleware/auth");

const cloudinary = require("../model/cloudinary");
const fileUpload = require("express-fileupload");
router.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
  })
);

router.get("/", async (req, res) => {
  let limit = req.query.limit ? req.query.limit : null;
  const gallery = await Gallery.findAll({ limit });
  res.status(200).json(gallery);
});

router.post("/", [auth, admin], async (req, res) => {
  if (!req.files || !req.files.imagefile)
    return res.status(400).send("image is required");
  let { text } = req.body;
  let { tempFilePath, mimetype } = req.files.imagefile;

  let { error } = Gallery.validate({ mimetype, text });
  if (error) return res.status(422).send(error.details[0].message);

  let { url, public_id } = await cloudinary.uploader.upload(tempFilePath);
  let gallery = await Gallery.create({ image: url, imageId: public_id, text });
  return res.status(200).send(gallery);
});

router.delete("/:id", [auth, admin], async (req, res) => {
  let { id } = req.params;
  let gallery = await Gallery.findByPk(id, { attributes: ["imageId"] });
  if (!gallery) return res.send("invalid gallery ID");

  await cloudinary.uploader.destroy(gallery.imageId);
  await Gallery.destroy({ where: { id } });
  return res.status(200).send("Gallery deleted succcessfully");
});

module.exports = router;
