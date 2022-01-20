const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    price: { type: Number, required: true },
    count: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);

module.exports = { Item };
