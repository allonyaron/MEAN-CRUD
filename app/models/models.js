var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
	name: {type: String, required: true},
	address: {type:String},
	age: {type:Number}
});

var Employee = mongoose.model("Employee", employeeSchema);

module.exports = {
	Employee:	Employee
};