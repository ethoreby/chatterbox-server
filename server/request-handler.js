var getHelper = require("./get-helper");

exports.handleRequest = function(request, response) {
  console.log("Serving request type " + request.method + " for url " + request.url);

  var method = requestRoutes[request.method];
  console.log(method);
  method(request, response);
};


var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  "Content-Type": "text/plain"
};

var handleGet = function(req, res) {
  console.log(JSON.stringify((req.url.slice(2).split("&"))));
  var statusCode = 200;

  res.writeHead(statusCode, headers);
  res.end(JSON.stringify({results: [{username: "Wilford Testington", text: "I am an English gentlemen", roomname:"4chan", createdAt: new Date()}] }));
};

var requestRoutes = {
  "GET": handleGet,
  "POST": function(req, res){
    var statusCode = 201;

    res.writeHead(statusCode, headers);
    res.end("Hello, World!");
  },
  "OPTIONS": function(req, res) {
    var status = 200;
    res.writeHead(status, headers);
    res.end();
  },
};
