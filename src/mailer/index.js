const fs = require("fs");
const path = require("path");
const dateConvert = require("../../junk_Code/spamConvert");
const Mailer = require("./mailerMod");
const eLog = require("../../CrossCuttingConcerns/Logs/logMod.js");

let metaDate = dateConvert.formatDate(new Date());

let template = fs.readFileSync(__dirname + "/Templates/iWouldLike/summary.html", {encoding: "utf-8"});

let replacements = {
    today: `${metaDate.day.es} ${metaDate.intDay}, ${metaDate.month.es} del ${metaDate.year}`,
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
    subject: "Resumen de la campaña",
    replacements,
    attachments: [
        {
            filename: "logo.png",
            path: path.resolve("./src/mailer/Templates/iWouldLike/logo.png"),
            cid: "iWouldLike@logoimagepng"
        }
    ]
}

setInterval(() => {
    if(process.env.TSWITCH) {
        try {
            Mailer.sendMail(options);
        } catch (error) {
            eLog.writeLog("mailer error", error);
        }
    }
}, (process.env.TSEND * 8.64e+7));