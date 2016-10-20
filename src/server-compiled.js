"use strict";

var _http = require("http");

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_http2.default.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write('hello world!');
    response.end();
}).listen(8888);

//# sourceMappingURL=server-compiled.js.map