var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');

var routes = require('./routes/index');
var users = require('./routes/users');
 var customers = require('./routes/customers')
 var store = require('./routes/store')
 var salesinfos = require('./routes/salesinfos')
//var salesperson = require('./routes/salesperson')
 var carinfos = require('./routes/carinfos')
 var salespeople = require('./routes/salespeople')



var app = express();

// with password and options
//var sequelize = new Sequelize('carsales', 'root', 'pass', {})
//var sequelize = new Sequelize('mysql://localhost:3306/carsales', {})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);
app.use('/', routes);
app.use('/', customers);
//app.use('/', salesperson);
app.use('/', store);
app.use('/', carinfos);
app.use('/', salesinfos);
app.use('/', salespeople);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

//delete an employee
/*app.post('/customers/:id/delete', function(req, res) {
        employeeProvider.delete(req.param('_id'), function(error, docs) {
                res.redirect('/')
        });
});
*/
module.exports = app;
