// First add the following two lines at the top of the customers controller so that we can access our model through var Customer
// need to infouire mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

// Edit the show method as follows
module.exports = (function() {
 return {

// Create
  // New (get)
  // Create (post)
    create: function(req, res) {
      var user = new Customer({name: req.body.name, age: req.body.age});
      user.save(
        function(err) {
        if(err) {
          console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully added a user!');
          Customer.find({},function(err,data){
            res.json(data);
          })
        }
      })
    },


// Retrieve
  // Index (all records)
  index: function(req, res) {
     Customer.find(
      {},
      function(err, results) {
       if(err) {
         console.log(err);
       } else {
         res.json(results);
       }
   })
  },
  // Show (Single Record)
  show: function(req, res) {
    Customer.find(
    {_id: req.params.id},
    function(err, results) {
      if(err) {
        console.log(err);
      } else {
        res.json(results);
      }
    })
  },

// Update
  // Edit (get)
  // Update (post)


// Destroy
  // Delete
  delete: function(req,res) {
    Customer.remove(
      {_id: req.params.id},
      function(err, results) {
        if (err) {
          console.log(err);
        } else {
          Customer.find({},function(err,data){
            res.json(data);
          })
      }
    });




  // return Customer.findById(req.params.id, function (error, customer) {
  //         return scope.customer.remove(function (error) {
  //             if (error) {
  //                 console.log(error);
  //             } else {
  //                 console.log("deleted customer: " + req.params.id);
  //                 return res.send();
  //             }
  //         });
  //     })
  }


 }
})();
// note that this is just a code snippet of the show method from the object returned in the controller (this includes the exports module.exports