const mongoose = require('mongoose');

const schema = mongoose.Schema({
  fbId: Number,
  name: String,
  email: String,
  photo: String,
  references: [],
  nannies: []
})

module.exports = mongoose.model('User', schema);