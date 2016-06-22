var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var errorHandler = require('./app/controllers/error')
var path = require('path');
var parent = path.resolve('.');
var installDirName = path.basename(parent);
var https = require('https');
var fs = require('fs');
var db = require('./config/db')
var app = express();

function setupPublicFiles() {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.static(path.join(__dirname, 'bower_components')));
}

function setupViewEngine() {
    app.set('views', path.join(__dirname, 'app', 'views'));        
    app.set('view engine', 'html');
    app.set('layout', 'layout');
    app.engine('html', require('hogan-express'));
}

function setupDebugging() {
    app.use(logger('combined'));
    app.use(errorHandler(app.get('env') === 'development'));    
    console.log(app.get('env'));   
}

function setupParsing() {
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
}

function setupRouting() {
    // Bootstrap routes
    require('./app/routes')(app);
    
    /// catch 404 and forwarding to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
}

function startHttpServer(ip_address, port) {
    app.listen(port, ip_address, function() {
      console.log( "HTTP server listening on " + ip_address + ", port: " + port );
    });
}

function init() {
    setupPublicFiles();
    setupViewEngine();
    setupDebugging();
    setupParsing();
    setupRouting();
    
    var server_port = 5000;
    var server_ip_address = '127.0.0.1';
    startHttpServer(server_ip_address, server_port);
}

init();
