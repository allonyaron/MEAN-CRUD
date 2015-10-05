var express = require('express');
var Employee = require('../models/models').Employee;

var employeeRouter = express.Router();



employeeRouter.route('/')
	.post(function(req,res) {
		var employee = new Employee();
		employee.name = req.body.name;
		employee.address = req.body.address;
		employee.age = req.body.age;
	
		employee.save(function(err) {
			if (err)
				res.send(err);

			res.json({message: 'Employee created'});
		});
	})
	.get(function(req,res) {
		Employee.find(function(err, employees) {
			if (err)
				res.send(err);
			res.json(employees);
		});
	});


employeeRouter.route('/:employee_id')

	.get(function(req, res) {
		Employee.findById(req.params.employee_id, function(err, employee) {
			if (err)
				res.send(err);
			res.json(employee);
		});
	})
	.put(function(req, res) {
		Employee.findById(req.params.employee_id, function(err, employee) {
			if (err)
				res.send(err);
			employee.name = req.body.name;
			employee.address = req.body.address;
			employee.age = req.body.age;

			employee.save(function(err) {
				if(err)
					res,send(err);

				res.json('employee updated');
			})

		});
	})
	.delete(function(req,res) {
		Employee.remove({
			_id: req.params.employee_id
		}, function(err, employee) {
			if (err) 
				res.send(err);
			res.json({message: "deleted"});
		});
	});

employeeRouter.get('/', function(req,res) {
	res.json({ message: 'MEAN-CRUD!!!'});
});


module.exports = employeeRouter;