var clientApp = require('./controllers/riot-app');
var examplesApi = require('./controllers/api/examples');

function setupApiEndpointControllers(app) {
    app.get ('/api/examples', examplesApi.get);
}

function setupPageControllers(app) {
    app.get('/*', clientApp.get);
}

module.exports = function (app) {    
    setupApiEndpointControllers(app);
    setupPageControllers(app);
};
