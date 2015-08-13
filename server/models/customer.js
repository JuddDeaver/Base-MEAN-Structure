// This is the customer.js file located at /server/models/customer.js
// We want to create a file that has the schema for our customers and creates a model that we can then call upon in our controller
var mongoose = require('mongoose');
// create our customerSchema
var CustomerSchema = new mongoose.Schema({
  name: String,
  age: Number
});
// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)
mongoose.model('Customer', CustomerSchema);
