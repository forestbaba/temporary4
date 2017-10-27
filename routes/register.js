var crypto = require('crypto');
var rand = require('csprng');
var user = require('./../model/user');


//exports.register = function (email, password, callback)
exports.register = function ( email,password,pnumber,username,firstname, lastname, callback) {

    if (email != null && pnumber.length == 11) {

        console.log('Inside..X');

        if (password != null && password.length > 4) {
            console.log('password not empty and greater than 4....');

            var temp = rand(160, 36);
            var newpass = temp + password;
            var token = crypto.createHash('sha512').update(email + rand).digest("hex");
            var hashed_password = crypto.createHash('sha512').update(newpass).digest("hex");
            console.log('stage 2....');
            var newuser = new user({
                token: token,
                email: email,
                pnumber:pnumber,
                fname:firstname,
                lname:lastname,
                username:username,
                hashed_password: hashed_password,
                salt: temp
            });

            console.log('stage 3....');

            user.find({username:username}, function (err, users) {

                console.log('inside critical now...');

                var len = users.length;

                if (len == 0) {
                    newuser.save(function (err) {

                        callback({'response': "Sucessfully Registered"});

                    });
                } else {

                    callback({'response': "Username is already Associated with another Account."});

                }
            });

        }
        else
        {
            callback({'response': "Invalid Credentials"});

            //callback({'response': "Email Not Valid"});

        }

    }
}