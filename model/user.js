var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = schema(
    {
        name:{
            type: String,
            required: true
        },

        password:{
            type: String
        },
    })
var User = module.exports = mongoose.model('temptemp',userSchema );

//module.exportsts = mongoose.model('timeme', userSchema);