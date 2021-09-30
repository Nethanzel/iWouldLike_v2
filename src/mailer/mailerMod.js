"use strict";
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");

async function sendMail(options) {

  let transporter = nodemailer.createTransport({
    host: options.host,
    port: 587,
    secure: false,
    auth: {
      user: options.user.mail,
      pass: options.user.pass
    },
  });

  var template = handlebars.compile(options.html);
  var htmlToSend = template(options.replacements);

  await transporter.sendMail({
    from: options.from,
    to: options.to,
    subject: options.subject,
    html: htmlToSend,
  });
}

module.exports.sendMail = sendMail;