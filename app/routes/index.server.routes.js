module.exports = function (app) {
    //load the controllers
    var index = require('../controllers/index.server.controller');
    var comments = require('../controllers/comments.server.controller.js');
    var thankyou = require('../controllers/thankyou.server.controller');
    //handle the routing of get and post requests
    app.get('/', index.render);
    app.post('/', index.render);
    app.get('/comments', comments.render);
    app.post('/comments', comments.render);
    app.post('/thankyou', thankyou.render);
    //
    app.post('/', function (req, res) {
        //console.log("POST request - User name = " + req.body.stud_email);
        index.render(req, res);
        
    });

};