const fs = require("fs");
const path = require("path");
const dateConvert = require("../../junk_Code/spamConvert");
const Mailer = require("./mailerMod");
const eLog = require("../../CrossCuttingConcerns/Logs/logMod.js");

let metaDate = dateConvert.formatDate(new Date());

let template = fs.readFileSync(__dirname + "/Templates/iWouldLike/report.html", {encoding: "utf-8"});

let replacements = {
    date: `${metaDate.day.es} ${metaDate.intDay}, ${metaDate.month.es} del ${metaDate.year}, 
        a las ${new Date().getHours() <= 9 ? "0" + new Date().getHours() : new Date().getHours()}:${new Date().getMinutes() <= 9 ? "0" + new Date().getMinutes() : new Date().getMinutes()} (hora del servidor).`,
}

let options = {
    host: process.env.HOST,
    user: {
        mail: process.env.MAIL,
        pass: process.env.PASS
    },
    html: template,
    from: `"I would like to ask" <${process.env.MAIL}>`,
    to: process.env.TO,
    subject: "Nuevo reporte",
    replacements,
    attachments: [
        {
            filename: "logo.png",
            path: path.resolve("./src/mailer/Templates/iWouldLike/logo.png"),
            cid: "iWouldLike@logoimagepng"
        }
    ]
}

try {
    Mailer.sendMail(options).catch(e => {eLog.writeLog("mailer error (Report)", e)});;
} catch (error) {
    eLog.writeLog("mailer error (Report)", error);
}