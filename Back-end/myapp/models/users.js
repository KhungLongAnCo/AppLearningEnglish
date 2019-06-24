const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    meaning:String,
    IPA:String,
    sentences:String,
    image:String,
    tasks:[{
        type:Schema.Types.ObjectId,
        ref: 'task'
    }]
});

const users = mongoose.model('users', userSchema);

module.exports = users;

