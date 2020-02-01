//This code uses the CommonJS module pattern to define a function named render()
//You can require this module and use this function
//You'll need to use Express routing functionality to utilize the controller
exports.render = function (req, res) {
  //read the username from body property of request object
  let username = req.body.username;
  let password = req.body.password;
  let error
  //make a reference to the session object
  let session = req.session;
  //store username in session object
  if (password) { session.username = username; }
  else if (username) {
    error = "Please Enter password";
  }
  console.log("In index function - User name = " + session.username);
  //check if session object contains the username
  if (session.username) {
    // res.redirect('/admin');
    // res.redirect("/comments");
    let comment = req.body.comment;

    // if (comment && req.body.comment.trim() !== "") {
    if (comment) {
      console.log("req.body.comment = '" + req.body.comment + "'");
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
      title: "Student Evaluation Login",
      username: username,
      error: error
    });
  }

  console.log("GET request - User name = " + session.username);
};
