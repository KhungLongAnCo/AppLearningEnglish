const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    desc:String,
    tasks:[{
        type:Schema.Types.ObjectId,
        ref: 'task'
    }]
});

const users = mongoose.model('users', userSchema);

module.exports = users;

