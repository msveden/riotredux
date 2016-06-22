
var $ = require('jquery');
var Promise = require('bluebird');
var localStorage = require('store');
var router = require('../router');

var STATUS_FORBIDDEN = 403;

function ErrorResponseHandler(wrappedRecject) {
    this.handler = function(response) {
        if (response.status === STATUS_FORBIDDEN) {
            // TODO: Do logout here stuff then redirect to login.
            router.replaceTo('login');
        }
        else {
            wrappedRecject(response);
        }
    };
}

function SuccessResponseHandler(wrappedResolve) {
    this.handler = function(data, status, xhr) {
        wrappedResolve(data);
    };
}

function withCustomHeaders(requestObject) {
    // TODO: Add custom headers here if any.
    return requestObject;
}

module.exports.get = function(url) {
    return new Promise(function(resolve, reject){
        $.ajax(withCustomHeaders({
            type: "GET",
            url: url,
            success: new SuccessResponseHandler(resolve).handler,
            error: new ErrorResponseHandler(reject).handler
        }));
    });
};

module.exports.post = function(url, body) {
    var json = JSON.stringify(body);    
    return new Promise(function(resolve, reject){
        $.ajax(withCustomHeaders({
            type: "POST",
            url: url,
            contentType: "application/json",
            data: json,
            processData: false,
            success: new SuccessResponseHandler(resolve).handler,
            error: new ErrorResponseHandler(reject).handler
        }));
    });
};

module.exports.delete = function(url, body) {
    var json = JSON.stringify(body);    
    return new Promise(function(resolve, reject){
        $.ajax(withCustomHeaders({
            type: "DELETE",
            url: url,
            contentType: "application/json",
            data: json,
            processData: false,
            success: new SuccessResponseHandler(resolve).handler,
            error: new ErrorResponseHandler(reject).handler
        }));
    });
};
