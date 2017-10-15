var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = mongoose.Schema({
    fname:String,
    lname:String,
    pnumber:String,
    token : String,
    email: String,
    hashed_password: String,
    salt : String,
    temp_str:String,
    date:{type: Date, default: Date.now}
});
//var User = module.exports = mongoose.model('students', userSchema);
//mongoose.connect('mongodb://localhost:27017/t4');
//
//module.exports = mongoose.model('timeme', userSchema);