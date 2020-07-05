require('express-async-errors');
const router = require('express').Router();
const validate = require('../../validation/contactUs/contactUs');
const sendContactUsMessage = require('../../utils/email/messages/contactus');

module.exports = router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  const { error } = validate({ name, email, message });
  if (error) return res.status(422).send(error.details[0].message);
  await sendContactUsMessage({ name, email, message });
  return res.status(200).send('success');
});
