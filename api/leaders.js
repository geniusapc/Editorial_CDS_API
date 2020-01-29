const router = require("express").Router();
require("express-async-errors");

const fileUpload = require("express-fileupload");
router.use(fileUpload());

const fs = require("fs");

const Leader = require("../model/leaders");
const auth = require("../middleware/auth");
const { editor } = require("../middleware/auth");
const localPath = require("../path");
const path = require("path");

router.get("/", async (req, res) => {
  let Leaders = await Leader.findAll({ order: [["id"]] });
  Leaders.map(
    e =>
      (e.dataValues.imagePath = `${path.resolve(
        localPath.leadersFolder,
        e.imageName
      )}`)
  );
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

    if (leaders.imageName) {
      fs.unlink(path.resolve(localPath.leadersFolder, leaders.imageName), e => {
        if (e) return res.status(500).send(e);
      });
    }

    let { imagefile, uploadPath, imageName, mimetype } = getImgProps(req.files);
    let { error: imageErr } = Leader.validationImage({ mimetype });
    if (imageErr) return res.status(422).send(error.details[0].message);
    imagefile.mv(uploadPath, err => {
      if (err) return res.status(500).send(err);
    });

    updateFields.imageName = imageName;
  }

  await Leader.update(updateFields, { where: { title: title.toUpperCase() } });
  return res.status(200).send("profile updated successfully");
});

let getImgProps = file => {
  let {
    imagefile,
    imagefile: { mimetype }
  } = file;
  let date = new Date().toISOString().replace(/:/g, "");

  let imageName = `${date}leader.jpg`;
  let uploadPath = `${localPath.leadersFolder}/${imageName}`;
  return { uploadPath, imageName, mimetype, imagefile };
};

module.exports = router;
