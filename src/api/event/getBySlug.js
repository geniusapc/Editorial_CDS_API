const Event = require('../../model/Event');
const Comment = require('../../model/Comment');

module.exports = async (req, res) => {
  const { slugTitle } = req.params;
  const event = await Event.findOne({
    where: { slugTitle },
    include: [{ model: Comment }],
  });
  return res.status(200).json(event);
};
