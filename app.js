//By Dinara Sharipova
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const configureExpress = require('./config/express');

const app = configureExpress();

app.listen(80);

console.log('Server running at http://localhost:80/');

module.exports = app;
