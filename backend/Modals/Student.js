const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  name: { type: String, required: true },
  roll_no: { type: String, required: true },
  class: { type: String },
});

module.exports = mongoose.model("student", StudentSchema);
