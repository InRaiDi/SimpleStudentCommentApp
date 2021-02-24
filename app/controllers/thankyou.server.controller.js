
exports.render = function (req, res) {
    var session = req.session;
    //store username in session object
    var stud_email = session.stud_email;
    var stud_comment= req.body.stud_comment;
    console.log("In ThankYou function - Stud Email = " + session.stud_email);
    //check if session object contains the username
    if (!stud_email) {
        res.redirect('/');
    }
    else {
        
        //display the ejs page
        res.render('thankyou', {
            title: 'Thank you',
            stud_email: stud_email,
            stud_comment: stud_comment 
        });
        
    }

    
    console.log("GET request - User name = " + session.stud_email);

    
    
};