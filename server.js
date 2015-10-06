var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

var employeeRouter = require('./app/routes/employee_router');
var port = process.env.PORT || 8080;

var db = require('./config/db');
mongoose.connect(db.url); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static(__dirname + '/public'));

app.use('/api/employees', employeeRouter);

app.get('*', function(req,res) {
	res.sendfile('./public/views/index.html');
})

app.listen(port);
console.log('MEAN-CRUD port - ' + port);