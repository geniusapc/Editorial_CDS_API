const Gallery = require('../../model/Gallery');
const cloudinary = require('../../utils/cloudinary/cloudinary');

module.exports = async (req, res) => {
  const { id } = req.params;
  const gallery = await Gallery.findByPk(id, { attributes: ['image'] });
  if (!gallery) return res.send('invalid gallery ID');

  await Gallery.destroy({ where: { id } });
  await cloudinary.uploader.destroy(gallery.image.id);
  return res.status(200).send('Gallery deleted succcessfully');
};
