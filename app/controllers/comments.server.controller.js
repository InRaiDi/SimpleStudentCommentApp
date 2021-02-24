
exports.render = function (req, res) {
   
    var session = req.session;
    //store username in session object
    var stud_email = session.stud_email;
    console.log("In Comments function - Stud Email = " + session.stud_email);
    //check if session object contains the username
    if (!stud_email) {
        res.redirect('/');
    }
    else {
        
        //display the ejs page
        res.render('comments', {
            title: 'Course comments',
            stud_email:  stud_email
        });
        
    }

    
   // console.log("GET request - User name = " + session.stud_email);

    
    
};