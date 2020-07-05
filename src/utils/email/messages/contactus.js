const constants = require('../../../constants');
const sgMail = require('../sendGrid');

const sendContactUsMail = async ({ name, email, message }) => {
  await sgMail.send({
    from: `${name} <${email}>`,
    to: constants.ADMIN_EMAIL,
    subject: 'Contact',
    text: message,
    html: message,
  });
};

module.exports = sendContactUsMail;
