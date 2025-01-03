var nodemailer = require('nodemailer');
function sendemail()
{
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kartikarora2311@gmail.com',
    pass: 'fhgk ugzt bcmc qkxb'
  }
});

var mailOptions = {
  from: 'kartikarora2311@gmail.com',
  to: 'dipthakur139@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
setTimeout(()=>{
    sendemail();
},2000);