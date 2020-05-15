const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "heasos@gmail.com",
    subject: "Welcome to this Task App thing",
    text: `Welcome to the app, ${name}. let me know how you get along with the app`,
  });
};

const sendDeletetionEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "heasos@gmail.com",
    subject: "Welp, bye then..",
    text: `Yeah okay ${name}, you're account is now deleted NO I DONT CARE I REALLY DONT`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendDeletetionEmail,
};
