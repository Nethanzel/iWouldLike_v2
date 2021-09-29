"use strict";
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const eLog = require("../../CrossCuttingConcerns/Logs/logMod.js");

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

  let info = await transporter.sendMail({
    from: options.from,
    to: options.to,
    subject: options.subject,
    html: htmlToSend,
  });

  eLog.writeLog("mailer", "Message sent: %s", info.messageId);
}

module.exports.sendMail = sendMail;