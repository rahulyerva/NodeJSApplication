var mysql=require('mysql');

var con=mysql.createConnection({
host:"localhost",
user:"root",
password:"Rahul@1995",
database:"user"
})

con.connect(function(err){
	if(err) throw err;
	console.log("Connected!");
})
