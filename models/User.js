const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true },
  electionCode: { type: String, required: true },
  hasVoted: { type: Boolean, default: false }
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);

