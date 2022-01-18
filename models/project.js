const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    price: { type: Number, required: true },
    count: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = { Project };
