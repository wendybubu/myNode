// import http from 'http';
var http = require('http');
function start() {
    function onRequest(request, response) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write('Hello World!');
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log('server has started.');
}
// export default start;
exports.start = start;