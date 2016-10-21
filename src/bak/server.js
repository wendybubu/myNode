"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = require("http");

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function start() {
    function onRequest(request, response) {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write('Hello World!');
        response.end();
    }
    _http2.default.createServer(onRequest).listen(8888);
    console.log('server has started.');
}
exports.default = start;

//# sourceMappingURL=server.js.map