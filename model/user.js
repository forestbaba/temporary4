var mongoose = require('mongoose');
var schema = mongoose.Schema;
var mongodb = require('mongodb');

module.exports = mongoose.model('timeme',
    {
    //    user: String,
    //    userId: String,
    //    userImage: String,
    //    content: String,
    //    date:{type: Date, default: Date.now}
    //
    //})

//var userSchema = mongoose.Schema({
    fname:String,
    lname:String,
    pnumber:String,
    username:String,
    token : String,
    email: String,
    hashed_password: String,
    salt : String,
    temp_str:String,
    date:{type: Date, default: Date.now}
});


//mongodb.MongoClient.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/t4' , function(err, database)
//{
//    if(err)
//    {
//        console.log(err);
//        process.exit(1);
//    }
//
//    db = database;
//    console.log("database connection ready");
//})
//


//var User = module.exports = mongoose.model('students', userSchema);
//mongoose.connect('mongodb://localhost:27017/t4');
//
//module.exports = mongoose.model('timeme', userSchema);