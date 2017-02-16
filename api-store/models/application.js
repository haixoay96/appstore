var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var app = new Schema({
    name: String,
    developer: ObjectId,
    description: String,
    ScreenShots: [String]
});

module.exports = mongoose.model('app', app);