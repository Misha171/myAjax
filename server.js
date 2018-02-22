////get zapit////
// var express=require('express');
// var app=express();
// //забезпечує віддачу статичного контенту з папки Ajax1
// app.use(express.static(__dirname))

// var bodyParser=require('body-parser')
// app.use(bodyParser.urlencoded({ extended: false })) //привязування до express
// app.use(bodyParser.json()) //кодування на JSON


// app.get('/',function(req,res){ //кореневий запис
// 	res.sendFile(__dirname+'/main.html')
// });

// app.get('/getajax',function(req,res){
// 	console.log(req.query);
// 	var p1=!isNaN(req.query.username)//якщо число
// 	console.log(p1);
// 	var p2=!isNaN(req.query.password)//якщо число
// 	console.log(p2);
// 	if(p1 && p2){ //обидві true
// 		var result=+req.query.username + +req.query.password
// 	res.send(result+'');
// }
// 	else
// 		res.send('Введіть числа!')
// 	//res.send('success');
// })
// app.listen(8080);
// console.log('Run server!');

var fs=require('fs');


////post zapit////
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

app.post('/postajax',function(req,res){
 	console.log(req.body);
// 	var p1=!isNaN(req.query.username)//якщо число
// 	console.log(p1);
// 	var p2=!isNaN(req.query.password)//якщо число
// 	console.log(p2);
// 	if(p1 && p2){ //обидві true
// 		var result=+req.query.username + +req.query.password
// 	res.send(result+'');
// }
// 	else
		res.send('test')
	//res.send('success');
})




app.get('/getajax',function(req,res){
	console.log(req.query);
	var p1=!isNaN(req.query.username)//якщо число
	console.log(p1);
	var p2=!isNaN(req.query.password)//якщо число
	console.log(p2);
	if(p1 && p2){ //обидві true
		var result=+req.query.username + +req.query.password
	res.send(result+'');
	}
	else
		res.send('Введіть числа!')
	//res.send('success');
})


app.get('/getfile',function(req,res){
	fs.readFile('data.json','utf-8',function(err,data){
		if(err)
			console.error(err)
		else
			res.send(data)
	});
});


app.post('/adduser',function(req,res){
	console.log(req.body);
	var user=req.body;
	fs.readFile('data.json','utf-8',function(err,data){
		if (err)
			console.error(err)
		else{
			data=JSON.parse(data);
			data.push(user);
			data=JSON.stringify(data);
			fs.writeFile('data.json',data);
		}
	})
	res.send('adduser');
})


app.post('/rowindex',function(req,res){
	console.log(req.body);
	fs.readFile('data.json','utf-8',function(err,data){
		if(err) console.error(err);
		data=JSON.parse(data)
		data.splice(req.body.index,1); //знищили 1 обєкт з масиву
		data=JSON.stringify(data);
		fs.writeFile('data.json',data);

	})
	res.send('DeleteUser');
})


//app.listen(8080);
app.listen(process.env.PORT || 8080)//для Heroku
console.log('Run server!');