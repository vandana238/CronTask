const cron = require('node-cron');
const express = require('express');
const nodemailer = require('nodemailer');
app = express();

  const mailOptions = {
  from:'vandhanachelluri@gmail.com',
  to: 'vandhanachelluri@gmail.com',
  subject: 'Happy brithday jiii',
  text: 'doggy',
  html: '<b>may all ur dreams comes true !!!!</b>'
};
console.log("okk")
nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user:"vandhanachelluri@gmail.com",
    pass:"afxtyabbthmybbrd"
    },port:465,
    host:'smtp@gmail.com'
    })
console.log("success")
 cron.schedule('0-59 *  1-31 October Friday ', function () {
  console.log('---------------------');
  console.log('Running Cron Process');
 

});


