const Event = require('../../model/Event');
const Comment = require('../../model/Comment');

module.exports = async (req, res) => {
  const events = await Event.findAll({
    include: [{ model: Comment }],
  });
  return res.status(200).json(events);
};
