let nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'email@gmail.com',
    pass: 'password'
  }
});