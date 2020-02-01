//This code uses the CommonJS module pattern to define a function named render()
//You can require this module and use this function
//You'll need to use Express routing functionality to utilize the controller
exports.render = function(req, res) {
  //read the username from body property of request object
  var username = req.body.username;
  //make a reference to the session object
  var session = req.session;
  //store username in session object
  session.username = username;
  console.log("In index function - User name = " + session.username);
  //check if session object contains the username
  if (session.username) {
    // res.redirect('/admin');
    // res.redirect("/comments");

    if (req.body.comment) {
      console.log("req.body.comment = " + req.body.comment);
      //display the ejs page
      res.render("thankyou", {
        title: "Thank you",
        username: session.username
      });
    } else {
      //display the ejs page
      res.render("comments", {
        title: "Comments",
        username: session.username
      });
    }
  } else {
    //display the ejs page
    res.render("index", {
      title: "Student Evaluation Login"
    });
  }

  console.log("GET request - User name = " + session.username);
};
