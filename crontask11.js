const cron = require('node-cron');
const express = require('express');
const nodemailer = require('nodemailer');
app = express();
let data = [
    {   username:"vandhana",
        email:"vandhanachelluri@gmail.com",
        dob:"21/10/2000",
        team:"innovation",
    },
    {   username:"priya",
        email:"vpinky@miraclesoft.com",
        dob:"25/10/2000",
        team:"backend",
    },
    {   username:"sweatha",
        email:"spidugu7@miraclesoft.com",
        dob:"20/10/2000",
        team:"frontend",
    }]
 
var emp="21/10/2000";
for(i=0;i<data.length;i++){
   if(data[i].dob==emp)
{
     console.log(data[i].email);
    const nodemailer = require('nodemailer');
    const msg = {
    from: 'vandhanachelluri@gmail.com',
    to: 'data[i].email',
    subject: 'Birthday Remainder',
    text: 'ADVANCE HAPPY BIRTHDAY '
    };
    console.log("working");
    nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user:"vandhanachelluri@gmail.com",
    pass:"afxtyabbthmybbrd"
    },port:465,
    host:'smtp@gmail.com'
    })
}   
}

