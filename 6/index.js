//Around page 30

var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {
    "/": requestHandlers.start,
    "/start": requestHandlers.start,
    "/upload": requestHandlers.upload
};
// handle["/"] = requestHandlers.start;
// handle["/start"] = requestHandlers.start;
// handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);