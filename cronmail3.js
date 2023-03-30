const nodemailer = require('nodemailer');
const cron = require("node-cron");
var User=
[{"name":"Swetha", "email":"swethapidugu1234@gmail.com","birthday":"22/10/2022","team":"innovation"},
{"name":"Vandhana","email":"vandhanachelluri@gmail.com","birthday":"21/10/2022","team":"frontend"},
{"name":"Harsha", "email":"harshavardhancherukuri2000@gmail.com","birthday":"21/10/2022","team":"fullstack"},
{"name":"cherukuri","email":"harshavardhancherukuri2000@gmail.com","birthday":"21/10/2022","team":"backend"},
{"name":"vandhu","email":"harshavardhancherukuri2000@gmail.com","birthday":"21/10/2022","team":"frontend"},]
today = new Date();
for(var i = 0; i < User.length; i++) {
d=User[i].birthday;
const [day , month , year]=d.split('/');
if(today.getDate()==day && today.getMonth()+1==month)
{
up_name=User[i].name;
up_email=User[i].email;
details(up_name,up_email);
}
}
function details(name,email)
{
uname=name;
uemial=email;
cron.schedule("* * * * * ", function() {
console.log("running a task every day at 3'o clock");
}
);

const msg = {
from: 'vandhanachelluri@gmail.com',
to: 'harshavardhancherukuri2000@gmail.com',
subject: 'Birthday Remainder',
text: 'Hpy Birthday'      +uname,
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
}