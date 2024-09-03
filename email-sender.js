let email = require("nodemailer");

let transport = email.createTransport({
  service: "gmail.com",
  auth: {
    user: "",
    pass: "",
  },
});

let mailOptions = {
  from: "temijeje@gmail.com",
  to: "temijeje@hotmail.com",
  subject: "Sending from my node gmc",
  text: "Keep turning up it will come good",
};

transport.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Email sent: " + info.response);
  }
});
