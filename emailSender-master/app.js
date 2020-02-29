




const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
var nodemailer = require('nodemailer');

const details = require("./details.json");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("The server started on port 3000 !!!!!!");
});

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center'>Wellcome to FunOfHeuristic <br><br>😃👻😃👻😃👻😃👻😃</h1>"
  );
});

app.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendMail(user, info => {
    console.log(`The mail has beed send 😃 and sent a message ${info.message} the id is ${info.messageId}`);
    res.send(info);
  });
});

async function sendMail(user, callback) {
  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'akhilkanapala',
      pass: 'akhilgmail'
    }
  });


console.log("This is a meeasaegee "+ user.name);
console.log("This is a meeasaegee "+ user.email);
console.log("This is a meeasaegee "+ user.message);
  var mailOptions = {
    from: 'abccccccc@gmail.com',
    to: user.email,
    subject: 'Email Sent using Nodemailer',
    text: 'NOdemailer Nodejs  was used to send the email and the message is',

    html: `<h2>Message Received from the form is:</h2>
    <br>
    <h4><i> ${user.message}</i></h4><br>`

   };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log("This is an error "+error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });


}

// main().catch(console.error);
