const fs = require("fs");
const path = require("path");
const dateConvert = require("../../junk_Code/spamConvert");
const Mailer = require("./mailerMod");
const eLog = require("../../CrossCuttingConcerns/Logs/logMod.js");
const dataOptions = require("../data/dataAcces");
const summaryMod = require("../data/summary.js");
const graphGenerator = require("./Templates/iWouldLike/Charts/index");

let metaDate = dateConvert.formatDate(new Date());
let template = fs.readFileSync(__dirname + "/Templates/iWouldLike/summary.html", {encoding: "utf-8"});

async function prjSummary() {
    let ansCount = await dataOptions.answerCount();
    let townSummary = await summaryMod.generateSummary();
    let smParams = await dataOptions.readParams();
    //[[lo que hay, lo que falta], [[cities data...], max]]
    return  [[ansCount, (smParams[0] * smParams[1]) - ansCount], [townSummary, [smParams[0],smParams[1]]]];
}

setInterval(async () => {
    if(process.env.TSWITCH) {
        try {
            let stats = {
                "errLog": await eLog.statusLog(),
                "reports": await eLog.reportStatusLog(),
                "maxOnline": eLog.getRecord(),
                "participants": await eLog.participantStatusLog()
            } 
            
            let dParticipant = "inline-block";
            let cReport;
            let cError;

            stats.errLog > 0 ? (stats.errLog = "Nuevo(s) error(es)", cError = "rgb(197, 0, 0)") : (stats.errLog = "Sin error(es)", cError = "rgb(7, 197, 0)");
            stats.reports > 0 ? (stats.reports = "Nuevo(s) reporte(s)", cReport = "rgb(197, 0, 0)") : (stats.reports = "Sin reporte(s)", cReport = "rgb(7, 197, 0)");
            stats.participants > 0 ? stats.participants = "Nuevo(s) participante(s)" : dParticipant = "none";

            let summary = await prjSummary();
            let graphURL = graphGenerator.Generate(summary);

            let replacements = {
                today: `${metaDate.day.es} ${metaDate.intDay}, ${metaDate.month.es} del ${metaDate.year}`,
                errLog: stats.errLog,
                reports: stats.reports,
                maxOnline: stats.maxOnline,
                participants: stats.participants,
                dParticipants: dParticipant,
                eColor: cError,
                rColor: cReport,
                Doughnut: graphURL.doughnut,
                Bars: graphURL.bars
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
            
            Mailer.sendMail(options);
        } catch (error) {
            eLog.writeLog("mailer error", error);
        }
    }
}, 30000/* ( process.env.TSEND * 8.64e+7 ) */);