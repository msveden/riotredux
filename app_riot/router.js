var riot = require('riot');
var store = require('./store');
var modalActions = require('./actions/modal-actions');
var pathActions = require('./actions/path-actions');

var MOUNTPOINT = 'app';
var _currentPage = null;
var _currentPageName = null;
var _routeMap = {};

function mount(pageName, opts) {
    return riot.mount(MOUNTPOINT, pageName + '-page', opts)[0];
}

function unmountCurrent() {
    if (_currentPage) {
        _currentPage.unmount(true);
    }
}

function closeAllModals() {
    store.dispatch(modalActions.close());
}

function mapPage(pageName) {
    if (pageName === '') {
        return 'home';
    }
    return pageName;
}

function pageRequiresLogin(page) {
    return page === 'account' 
        || page === 'schedule';
}

function mountPage(page, p1, p2, p3, p4, p5) {
    closeAllModals();
    
    var opts = {
        page: page,
        paths: []
    };
    
    if (p1) opts.paths.push(p1);
    if (p2) opts.paths.push(p2);
    if (p3) opts.paths.push(p3);
    if (p4) opts.paths.push(p4);
    if (p5) opts.paths.push(p5);
    
    store.dispatch(pathActions.setPath(opts.paths));
    page = mapPage(page);
    
    if (_currentPageName == page && _routeMap[page]) {
        // Same page so updating
        _routeMap[page](opts);
        return;
    }
    unmountCurrent();
    _currentPage = mount(page, opts);
    _currentPageName = page;
    if (!_currentPage) {
        _currentPage = mount('not-found');
        _currentPageName = 'not-found';
    }
}

function init() {
    var router = riot.route.create();
    router(mountPage);
    riot.route.base('/')
    riot.route.start(true);
};

init();

function go(page, p1, p2, p3, p4, p5, replace) {
    var path = page;
    if (p1) path += '/' + p1;
    if (p2) path += '/' + p2;
    if (p3) path += '/' + p3;
    if (p4) path += '/' + p4;
    if (p5) path += '/' + p5;
    riot.route(path, null, replace);
    
    // Scrolling here because going to the same
    // page as current will not trigger mountPage
    // since the route does not change
    window.scrollTo(0, 0);
}

module.exports.goTo404 = function() {
    riot.route('not-found', null, true);
}

module.exports.replaceTo = function(page, p1, p2, p3, p4, p5) {
    go(page, p1, p2, p3, p4, p5, true);
}

module.exports.goTo = function(page, p1, p2, p3, p4, p5) {
    go(page, p1, p2, p3, p4, p5, false);
}

module.exports.addRouteCallback = function(name, callback) {
    _routeMap[name] = callback;
};