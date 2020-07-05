const Event = require('../../model/Event');
const Comment = require('../../model/Comment');

module.exports = async (req, res) => {
  const { id } = req.params;
  const event = await Event.findOne({
    where: { id },
    include: [{ model: Comment }],
  });
  return res.status(200).json(event);
};
