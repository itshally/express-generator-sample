const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    username: {type: String, required: true},
    password: String
});

module.exports = mongoose.model('Users', UsersSchema);