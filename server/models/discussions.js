// This is the discussion.js file located at /server/models/discussion.js
// We want to create a file that has the schema for our discussions and creates a model that we can then call upon in our controller
var mongoose = require('mongoose');
// create our discussionSchema
var DiscussionSchema = new mongoose.Schema({
  name: String,
  age: Number
});
// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)
mongoose.model('Discussion', DiscussionSchema);
