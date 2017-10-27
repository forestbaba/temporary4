var crypto = require('crypto');
var rand = require('csprng');
var mongoose = require('mongoose');
var gravatar = require('gravatar');
//var user = require('config/models');
var user = require('../model/user');


exports.login = function(username,password,callback) {

    user.find({username: username},function(err,users){

        if(users.length != 0){

            var temp = users[0].salt;
            var hash_db = users[0].hashed_password;
            var id = users[0].token;
            var newpass = temp + password;
            var hashed_password = crypto.createHash('sha512').update(newpass).digest("hex");
            var grav_url = gravatar.url(username, {s: '200', r: 'pg', d: '404'});
            var firstname = users[0].fname;
            var lastname = users[0].lname;
            var phone = users[0].phone;
            var email = users[0].email;
            var username = users[0].username
            if(hash_db == hashed_password){

                callback({'response':"Login Success",'res':true,'token':id,'grav':grav_url,
                    'firstname':firstname,'lastname':lastname,'phone':phone,
                    'email':email,
                    'username':username
                });

            }
            else
            {

                callback({'response':"Invalid Password.",'res':false});

            }
        }else {

            callback({'response':"Invalid Username or Password",'res':false});

        }
    });
}