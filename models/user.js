const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {type: String},
    surname: {type: String},
    username: {type: String},
    email: {type: String},
    phone: {type: Number}
});


module.exports = mongoose.model('User', UserSchema);
