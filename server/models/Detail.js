const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
  title: String,
  date: String,
  description: String,
});

const Detail = mongoose.model('Detail', detailSchema);

module.exports = Detail;