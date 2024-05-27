const http = require("http");

// http.createServer([options][, requestListener])
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, world!\n");
});
server.listen(3000);
console.log("Server running at http://localhost:3000/");

// http.get(options[, callback])
http.get("http://www.example.com/", (res) => {
    console.log("Received response:", res.statusCode);
});

// http.globalAgent
console.log("Global agent:", http.globalAgent);

// http.request(options[, callback])
const options = {
    hostname: "www.example.com",
    port: 80,
    path: "/",
    method: "GET",
};
const request = http.request(options, (res) => {
    console.log("Received response:", res.statusCode);
});
request.end();

// http.STATUS_CODES
console.log("HTTP status codes:", http.STATUS_CODES);
