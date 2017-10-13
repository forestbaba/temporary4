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

module.exports = mongoose.model('temp4', userSchema);