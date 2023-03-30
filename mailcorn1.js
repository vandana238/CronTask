const cron = require('node-cron');
const nodemailer = require('nodemailer');

const msg = {
from: 'vandhanachelluri@gmail.com',
to: 'harshavardhancherukuri2000@gmail.com',
subject: 'Birthday Remainder',
text: 'ADVANCE HAPPY BIRTHDAY'
};
nodemailer.createTransport({
service: 'gmail',
auth: {
user:"vandhanachelluri@gmail.com",
pass:"tllwsmwqgkvotezm"
},port:465,
host:'smtp@gmail.com'
})
.sendMail(msg,(err)=>{
if(err)
{
return console.log(err)
}
else{
return console.log("Email sent");
}
})
