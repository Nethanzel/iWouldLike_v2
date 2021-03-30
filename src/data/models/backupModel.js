const mongoose = require('mongoose');
const schema = mongoose.Schema;

const backup = new schema({
  prj_name: {type: String},
  c_date: {type: Date}, //creation time
  e_date: {type: String}, //end time
  questions: {type: Array},
  answers: {type: Array}
});

module.exports = mongoose.model("Backup", backup);