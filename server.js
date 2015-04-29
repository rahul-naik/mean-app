#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
var signup = require('./routes/signup');
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
 app.use(express.static(path.join(__dirname, 'myClient')));
    // This covers serving up the index page
    app.use(express.static(path.join(__dirname, 'myClient/.tmp')));
    app.use(express.static(path.join(__dirname, 'myClient/app')));
	app.use('/signup', signup);
	module.exports = app;
	var debug = require('debug')('server:server');
var http = require('http');


/**
 * Get port from environment and store in Express.
 */



/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

var server_port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
 
server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", server_port " + server_port )
});