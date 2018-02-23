const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// mongoose.promise = Promise;

const dataSchema = new Schema({
  name: { type: String, required: true },
  marketCap: { type: Number, required: true },
  Volume: Number,
  date: { type: Date, default: Date.now }
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
