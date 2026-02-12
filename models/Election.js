
const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  name: String,
  symbol: String,
  votes: { type: Number, default: 0 }
});

const electionSchema = new mongoose.Schema({
  adminPhone: { type: String, required: true },
  title: { type: String, required: true },
  code: { type: String, unique: true },
  startTime: { type: Date, required: true },
  deadline: { type: Date, required: true },
  candidates: [candidateSchema]
});

module.exports = mongoose.model('Election', electionSchema);
