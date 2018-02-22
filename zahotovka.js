var express=require('express');
var app=express();
//забезпечує віддачу статичного контенту з папки Ajax1
app.use(express.static(__dirname))

var bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({ extended: false })) //привязування до express
app.use(bodyParser.json()) //кодування на JSON


app.get('/',function(req,res){ //кореневий запис
	res.sendFile(__dirname+'/main.html')
});
app.listen(8080);
console.log('Run server!');