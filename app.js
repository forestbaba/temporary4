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
var Register = require('./routes/register');
var Login = require('./routes/login');
var Changepass = require('./routes/chgpass');




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());


//mongoose.connect(process.env.MONGODB_URI );
mongoose.connect( 'mongodb://localhost:27017/t4');

//mongodb.MongoClient.connect(process.env.MONGODB_URI || 'mongodb://heroku_kvw9cb8w:m6o009iinbrs95k6s3nl1m2843@ds119585.mlab.com:19585/heroku_kvw9cb8w' , function(err, database)

//mongodb.MongoClient.connect(process.env.MONGODB_URI || 'mongodb://localhost/tento' , function(err, database)
//
//{
//	if(err)
//	{
//		console.log(err);
//		process.exit(1);
//	}
//
//	db = database;
//	console.log("database connection ready");
//})

app.get('/home',function(req, res)
	{
		res.json({"status":"welcome  to OAU  suppoert, what may we do for you today?"});
	});


app.post('/api/signUp', function(req, res)
{

	var firstname = req.body.firstname;
	var lastname = req.body.lastname;
	var username = req.body.username;
	var email = req.body.email;
	var password = req.body.password;
	var phone = req.body.phone;



	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('firstname', 'First Name is required').notEmpty();
	req.checkBody('lastname', 'Last Name is required').notEmpty();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('phone', 'phone is not valid').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.sanitize('email').normalizeEmail({ remove_dots: false });

	// Check for validation error
	var errors = req.validationErrors();
	if (errors)
	{
		return res.status(400).send(errors);
	}
	else
	{


		//Register.register(email,password,phone,firstname,lastname,username, function (found)
		console.log('inside now')
		Register.register(email,password,phone,username,firstname,lastname, function (found)
		{
			console.log(found);
			res.json(found);
		});
	}

})

app.post('/api/login', function (req, res) {
	var email = req.body.email;
	var password = req.body.password;

	Login.login(email, password, function (found) {
		console.log(found);
		res.json(found);
	});
});


app.post('/api/chgpass', function(req, res) {
	var id = req.body.id;
	var opass = req.body.oldpass;
	var npass = req.body.newpass;

	Changepass.cpass(id,opass,npass,function(found){
		console.log(found);
		res.json(found);
	});
});


app.post('/api/resetpass', function(req, res) {

	var email = req.body.email;

	Changepass.respass_init(email,function(found){
		console.log(found);
		res.json(found);
	});
});


app.post('/api/resetpass/chg', function(req, res) {

	var email = req.body.email;
	var code = req.body.code;
	var npass = req.body.newpass;

	Changepass.respass_chg(email,code,npass,function(found){
		console.log(found);
		res.json(found);
	});
});







app.listen(process.env.PORT || 9000, function()
{
	console.log('listening on: 9000')
});