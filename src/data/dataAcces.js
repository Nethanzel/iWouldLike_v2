const mongo = require("mongoose");

const Answer = require("./models/answersModel.js");
const Report = require("./models/reportsModel.js");
const Question = require("./models/questionModel.js");
const Backup = require("./models/backupModel.js");

const eLog = require("../../CrossCuttingConcerns/Logs/logMod.js");
const { updateRecord, getRecord } = require("../../CrossCuttingConcerns/data.js");

let qCache = undefined;

mongo.set('useNewUrlParser', true);
mongo.set('useUnifiedTopology', true);

mongo.connect(process.env.DB) 
.then(() => {
    console.log("DB connection is up.");
    qCache = getQuestions(); 
})
.catch(e => {
    eLog.writeLog("data/connection error", e);
})

function saveAnswers(answers) {
    try {
        let gAnswers = JSON.parse(answers.answers);
        answers.answers = gAnswers
        let inComing = new Answer(answers);
        inComing.save((err, doc) => {
            if(err) {
                eLog.writeLog("data/s-answers error", JSON.stringify(answers) + "\n" + err);
            }
        });
        return true;
    } catch (error) {
        eLog.writeLog("data/answers error", error);
        return false;
    }
}

async function getQuestions() {
    try {
        let Questions = await Question.find();

        if(Questions) {
            return Questions;
        } else return null;
    } catch (error) {
        eLog.writeLog("data/questions error", error);
        return null;
    }
}

function saveReport(report) {
    try {
        let inComing = new Report(report);
        inComing.save((err, doc) => {
            if(err) {
                eLog.writeLog("data/s-report error", JSON.stringify(report) + "\n" + err);
            }
        });
        return true;
    } catch (error) {
        eLog.writeLog("data/report error", error);
        return false;
    }
}

function questionsInterface() {
    if(qCache) {
        return qCache;
    } else return null;
}

function qUpdate() {
    qCache = getQuestions()
}

//From the dashboard, sent the project configurations
async function updateParams(newParams) {

    let cParams = readParams();
    let max = newParams.max;
    let ruler = newParams.ruler;
    let dist = 1;

    if(newParams.max != undefined && newParams.max != null && newParams.max != "") {
        if(max.includes("/") > -1) {
            let x = max.split("/");
            max = x[0];
            dist = x[1];
        }
    } else max = cParams[0];

    if(newParams.ruler != undefined && newParams.ruler != null && newParams.ruler != "") {
        ruler = newParams.ruler;
    } else ruler = cParams[1];

    let projectConfigs = {
        to: newParams.monitors.length ? newParams.monitors.split(",") : [],
        timeToSend: newParams.timetoSend,
        tSwitch: newParams.tSwitch,
        Host: newParams.Host
    }

    let nParams = [max, dist, ruler, projectConfigs]
    let res = await updateRecord("params", nParams);

    if(res.n != 0) {
        return true;
    } else return false;
}

async function readParams() {
    let params = await getRecord("params")
    return params;
}

async function answerCount() {
    let res = await Answer.countDocuments();
    return res;
}

async function getAnswers() {
    let answers = await Answer.find();
    return answers;
}

async function clientStatus(token) {
    let clientAnswers = await Answer.findOne({client: token});

    if(clientAnswers) {
        return true;
    } else return false;
}

async function clearUserToken(token) {

    let clientAns = await Answer.findOne({client: token});

    if(clientAns) {
        clientAns.client += "_";
        await Answer.updateOne({client: token}, clientAns);
        return true;
    }

    return false
}

module.exports.saveAnswers = saveAnswers;
module.exports.getQuestions = questionsInterface;
module.exports.saveReport = saveReport;
module.exports.qUpdate = qUpdate;
module.exports.updateParams = updateParams;
module.exports.readParams = readParams;
module.exports.answerCount = answerCount;
module.exports.getAnswers = getAnswers;
module.exports.clientStatus = clientStatus;
module.exports.clearUserToken = clearUserToken;

async function n_Backup() {
    let questions = await getQuestions();
    let answers = await getAnswers();
    let c_project = await eLog.get_cProject();
    let e_date = new Date();

    let newBackup = {
        prj_name: c_project.name,
        c_date: c_project.created,
        e_date,
        questions,
        answers,
    }

    let backup = new Backup(newBackup);
    let res = await backup.save();
    
    if(res.prj_name == c_project.name) {
        return true;
    } else {
        return false;
    }
}

async function project_clear() {
    let ansDel = await Answer.deleteMany({});
    let queDel = await Question.deleteMany({});

    return [ansDel, queDel];
}

module.exports.n_Backup = n_Backup;
module.exports.project_clear = project_clear;