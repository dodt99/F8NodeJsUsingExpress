const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  author: ObjectId,
  title:{ type: String, default: 'title' },
  desc: { type: String, default: 'desc' },
});

module.exports = mongoose.model('Course', Course);

