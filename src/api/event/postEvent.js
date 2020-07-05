const slugify = require('slugify');
const Event = require('../../model/Event');
const cloudinary = require('../../utils/cloudinary/cloudinary');

module.exports = async (req, res) => {
  const { text, title, date } = req.body;

  const { error: imgErr } = validateImg(req.files);
  const { error } = validate({ mimetype, text, title, date });
  if (imgErr) return res.status(422).send(imgErr.details[0].message);
  if (error) return res.status(422).send(error.details[0].message);

  const slugTitle = slugify(title);
  const { tempFilePath } = req.files.imagefile;
  const { url, public_id } = await cloudinary.uploader.upload(tempFilePath);
  const [data, created] = await Event.findOrCreate({
    where: { slugTitle },
    defaults: { image: { url, id: public_id }, text, title, createdAt: date },
  });
  if (!created) return res.status(400).send('Event already exist');

  return res.status(201).json(data);
};
