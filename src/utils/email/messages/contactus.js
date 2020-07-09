const constant = require('../../../constant');
const sgMail = require('../sendGrid');

const sendContactUsMail = async ({ name, email, message }) => {
  await sgMail.send({
    from: `${name} <${email}>`,
    to: constant.ADMIN_EMAIL,
    subject: 'Contact',
    text: message,
    html: message,
  });
};

module.exports = sendContactUsMail;
