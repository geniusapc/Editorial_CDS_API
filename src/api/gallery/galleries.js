const Gallery = require('../../model/Gallery');

module.exports = async (req, res) => {
  const gallery = await Gallery.findAll();
  res.status(200).json(gallery);
};
