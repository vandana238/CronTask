const nodemailer = require('nodemailer');

const msg = {
from: 'vandhanachelluri@gmail.com',
to: 'harshavardhancherukuri2000@gmail.com',
subject: 'Birthday Remainder',
text: 'ADVANCE HAPPY BIRTHDAY HARSHA'
};
nodemailer.createTransport({
service: 'gmail',
auth: {
user:"vandhanachelluri@gmail.com",
pass:"afxtyabbthmybbrd"
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
