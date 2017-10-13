var express = require('express');
var mongoose = require ('mongoose');
var app = express();
var port = process.env.PORT || 21000;
var User = require('./model/user');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;
var CONT_C = "users";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(true));

//mongodb.MongoClient.connect(process.env.MONGO_URI, function(err, database)
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
		res.json('Testing to know its working');
	});

app.post('/api/signUp', function(req, res)
{
	var user = new User(req.body);
	user.save();
	res.json(req.body);
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

app.listen(process.env.PORT || 9000, function()
{
	console.log('listening on: 9000')
});