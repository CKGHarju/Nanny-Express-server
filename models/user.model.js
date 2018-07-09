const mongoose = require('mongoose');

const schema = mongoose.Schema({
  fbId: String,
  name: String,
  email: String,
  photo: String,
  friends: [],
  references: Array,
  nannies: Array
})

module.exports = mongoose.model('User', schema);