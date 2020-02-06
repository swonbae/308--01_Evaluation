//This code uses the CommonJS module pattern to define a function named render()
//You can require this module and use this function
//You'll need to use Express routing functionality to utilize the controller
exports.render = function(req, res) {
  //make a reference to the session object
  var session = req.session;
  // let comment = req.body.comment;

  //check if username is stored in session object
  if (session.username) {

    // if (comment) {
    //   console.log("req.body.comment = '" + req.body.comment + "'");
    //   res.redirect('/thankyou');
    // } else {
      //display the ejs page
      res.render("comments", {
        title: "Comments",
        username: session.username
      });
    // }

  } else {
    res.render("nosession", {
      title: "Login Needed",
      username: session.username
    });
    // res.write("<h1>Please login first.</h1>");
    // res.end("<a class="+"btn"+" href=" + "/" + ">Login</a>");
    // // res.end("<a class='btn' href=" + "/" + ">Login</a>");
  }
};
