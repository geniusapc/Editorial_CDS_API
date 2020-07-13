const Event = require('../../model/Event');
const cloudinary = require('../../utils/cloudinary/cloudinary');
const validate = require('../../validation/event/event');
const validateImg = require('../../validation/image/image');

module.exports = async (req, res) => {
  const { title, text } = req.body;
  const { id } = req.params;

  const event = await Event.findByPk(id);
  if (!event) return res.status(400).send('Event does not exist');

  const { error } = validate({ text, title });
  if (error) return res.status(422).send(error.details[0].message);
  const updateFields = { text, title };

  if (!!req.files) {
    const { error: imgError } = validationImg(req.files);
    if (imgError) return res.status(422).send(imgError.details[0].message);
    await cloudinary.uploader.destroy(event.url).catch((err) => {
      throw err.error;
    });
    const { tempFilePath } = req.files.imagefile;
    const { url, public_id } = await cloudinary.uploader.upload(tempFilePath);
    updateFields = { ...updateFields, imagId: public_id, url };
  }

  await Event.update(updateFields, { where: { id } });
  return res.status(200).send('Event Updated succefully');
};
