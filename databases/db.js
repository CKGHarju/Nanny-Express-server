const mongoose = require('mongoose');
const mongodbURI = process.env.MONGODB_URI || 'mongodb://localhost/nanny-express'
mongoose.connect(mongodbURI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {
  console.log(`Mongodb connected at ${mongodbURI}`)
})

module.exports = db;