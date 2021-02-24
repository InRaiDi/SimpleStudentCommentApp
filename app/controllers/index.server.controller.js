exports.render = function (req, res) {
    //read the username from body property of request object
    var stud_email = req.body.stud_email;
    //make a reference to the session object
    var session = req.session;
    //store username in session object
    session.stud_email = stud_email;
    console.log("In index function - Stud email = " + session.stud_email);
    //check if session object contains the username
    if (session.stud_email) {
        res.redirect('/comments');
    }
    else {
        
        //display the ejs page
        res.render('index', {
            title: 'Student Evaluation Login'
        });
        
    }

    
    //console.log("GET request - User name = " + session.stud_email);

    
    
};