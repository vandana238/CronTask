// var express = require('express')
// var app = express()
let cron = require('node-cron');
let nodemailer = require('nodemailer');

let mailOptions = {
      from:'vandhanachelluri@gmail.com',
      to:'vandhanachelluri@gmail.com',
      subject: 'Happy birthday vandhu',
      text: 'May all ur dreams comes true'
 };
 console.log("it's working");

let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'vandhanachelluri@gmail.com',
        pass: ''
      }
  });

cron.schedule('* * * * *', () => {
    console.log("ok");

transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
  });
});