const Comment = require('../../model/Comment');
const validate = require("../../validation/comment/comment")

module.exports = async (req, res) => {
  const { eventId } = req.params;
  const { name, comment } = req.body;

  const { error } = validate({name, comment });
  if (error) return res.status(422).send(error.details[0].message);

  await Comment.create({ name, eventId, comment });
  return res.status(201).send('comments inserted successfully');
};
