const Gallery = require('../../model/Gallery');
const cloudinary = require('../../utils/cloudinary/cloudinary');
const validateImg = require('../../validation/image/image');
const validate = require('../../validation/gallery/gallery');

module.exports = async (req, res) => {
  const { text } = req.body;

  const { error } = validate({ text });
  const { error: imgError } = validateImg(req.files);
  if (error) return res.status(422).send(error.details[0].message);
  if (imgError) return res.status(422).send(imgError.details[0].message);

  const { tempFilePath } = req.files.imagefile;
  const { url, public_id } = await cloudinary.uploader.upload(tempFilePath);
  const gallery = await Gallery.create({
    text,
    image: { url, id: public_id },
  });
  return res.status(200).send(gallery);
};
