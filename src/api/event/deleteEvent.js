const Event = require('../../model/Event');
const cloudinary = require('../../utils/cloudinary/cloudinary');

module.exports = async (req, res) => {
  const { id } = req.params;
  const event = await Event.findByPk(id, { attributes: ['image'] });
  if (!event) return res.status(400).send('invalid Event id');
  await cloudinary.uploader.destroy(event.image.id);
  await Event.destroy({ where: { id } });
  return res.status(200).send('deleted succefully');
};
