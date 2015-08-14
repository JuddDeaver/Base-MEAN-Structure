// This is the placeholder.js file located at /server/models/placeholder.js
// We want to create a file that has the schema for our placeholders and creates a model that we can then call upon in our controller
var mongoose = require('mongoose');
// create our placeholderSchema
var PlaceholderSchema = new mongoose.Schema({
  name: String,
  age: Number
});
// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)
mongoose.model('Placeholder', PlaceholderSchema);
