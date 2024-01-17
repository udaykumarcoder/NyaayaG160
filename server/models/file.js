// models/file.js
const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  date: String,
  name: String,
  filename: String,
  content: String,
  fileType: String, // 'text', 'image', or 'video'
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
