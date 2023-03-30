var express = require('express')
var app = express()
var cron = require('node-cron');
var app = node-cron()
let data = [
    { 
    username:"vandhana",
    email:"vandhanachelluri@gmail.com",
    dob:"21/10/2000",
    team:"innovation",
    },
    {
        username:"priya",
        email:"vpinky@miraclesoft.com",
        dob:"25/10/2000",
        team:"backend",

    },
    {
        username:"sweatha",
        email:"spidugu7@miraclesoft.com",
        dob:"20/10/2000",
        team:"frontend",

    }]
    
    const mailOptions = {
        from:'vandhanachelluri@gmail.com',
        to: 'vandhanachelluri@gmail.com',
        subject: 'Happy brithday jiii',
        text: 'doggy',
        html: '<b>may all ur dreams comes true !!!!</b>'
      };
    cron.schedule('1,2,4,5 * * * *', () => {
      console.log('running every minute 1, 2, 4 and 5');
    });