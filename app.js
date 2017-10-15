var express = require('express');
var mongoose = require ('mongoose');
var app = express();
var port = process.env.PORT || 21000;
var User = require('./model/user');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;
var CONT_C = "users";
var expressValidator = require('express-validator');
//var Register = require('./routes/register');
require('./routes/register.js')(app);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());


//mongoose.connect('mongodb://localhost/temp4');


mongodb.MongoClient.connect(process.env.MONGODB_URI || 'mongodb://localhost/tento' , function(err, database)
{
	if(err)
	{
		console.log(err);
		process.exit(1);
	}

	db = database;
	console.log("database connection ready");
})

app.get('/home',function(req, res)
	{
		res.json('Testing to know its working');
	});

app.post('/api/signUp', function(req, res)
{

	//var email = req.body.email;
	//var password = req.body.password;
	//var phone = req.body.pnumber;
    //
    //
    //
	//req.checkBody('email', 'Email is required').notEmpty();
	//req.checkBody('email', 'Email is not valid').isEmail();
	//req.sanitize('email').normalizeEmail({ remove_dots: false });
    //
	//// Check for validation erro
	//var errors = req.validationErrors();
	//if (errors)
	//{
	//	return res.status(400).send(errors);
	//}
	//else
	//{
    //
    //
	//	REGISTER.register(email,password,phone, function (found) {
	//		console.log(found);
	//		res.json(found);
	//	});
	//}



	//var name = req.body.name;
	//var password = req.body.password;
	//var phone = req.body.pnumber;
    //
	//var user = new User();
	//user.name = name;
	//user.password=password;
	//user.save();
	//res.json(req.body);
	//

	//var name = req.body.name;
	//var password = req.body.pass;
    //
	//var newUser = new User({
	//	name: name,
	//	password: password
	//});
    //
	//User.save(newUser, function(err, user1)
	//{
	//	if(err)
	//	throw err;
	//	res.json(user1);
	//})
	//User.createUser(newUser, function(err, user){
	//	if(err) throw err;
	//	console.log(user);
	//	res.json(user);
	//});

})

app.post('/api/login', function(req, res)
{
	User.find(req.body, function(err, result)
	{
		if(err)
		{
			console.log('error out');
		}
		if(result && result.length === 1)
		{
			res.json({"status":"User found...."})
			//var userData = result[0];
            //
			//res.json(
			//	{
			//		email:req.body.email,
			//		_id :userData._id,
			//		username : userData.username,,
			//		image: userData.image
			//	});
		}
	})
})

app.listen(process.env.PORT || 9000, function()
{
	console.log('listening on: 9000')
});