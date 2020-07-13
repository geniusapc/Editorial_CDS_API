const slugify = require('slugify');
const Event = require('../../model/Event');
const cloudinary = require('../../utils/cloudinary/cloudinary');
const validateImg = require('../../validation/image/image');
const validate = require('../../validation/event/event');

module.exports = async (req, res) => {
  const { text, title, date } = req.body;

  const { error: imgErr } = validateImg(req.files);
  const { error } = validate({ text, title, date });
  if (imgErr) return res.status(422).send(imgErr.details[0].message);
  if (error) return res.status(422).send(error.details[0].message);

  const slugTitle = slugify(title);
  const { tempFilePath } = req.files.image;
  const { url, public_id } = await cloudinary.uploader
    .upload(tempFilePath)
    .catch((err) => {
      throw err.error;
    });
  const [data, created] = await Event.findOrCreate({
    where: { slugTitle },
    defaults: { imageId: public_id, url, text, title, createdAt: date },
  });
  if (!created) return res.status(400).send('Event already exist');

  return res.status(201).json(data);
};
