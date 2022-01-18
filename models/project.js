const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  inventory: [
    { name: { type: String, required: true }, description: { type: String } },
  ],
});

const Project = mongoose.model("Project", projectSchema);

module.exports = { Project };
