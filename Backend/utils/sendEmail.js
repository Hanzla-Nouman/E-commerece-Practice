// const nodeMailer = require("nodemailer");

// const sendEmail = async (options) => {
//   const transporter = nodeMailer.createTransport({
//     service:  process.env.SMTP_SERVICE,
//     auth: {
//       user: process.env.SMTP_MAIL,
//       pass: process.env.SMTP_PASSWORD,
//     },
//   });

//   const mailOptions = { 
//     from: process.env.SMTP_MAIL,
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//   };
//   await transporter.sendMail(mailOptions)
// };

// module.exports = sendEmail;

var nodemailer = require('nodemailer');
const sendEmail = async (options) => {
var transporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE,
  auth: {
    user: `${process.env.SMTP_MAIL}`,
    pass: `${process.env.SMTP_PASSWORD}`
  }
});

var mailOptions = {
  from: `${process.env.SMTP_MAIL}`,
  to:  options.email,
  subject: options.subject,
  text:  options.message
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log("hi")
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});}
module.exports = sendEmail;
