const https = require("https");

// https.createServer([options][, requestListener])
const server = https.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, world!\n");
});

server.listen(3000);
console.log("Server running at https://localhost:3000/");

// https.get(options[, callback])
https.get("https://www.example.com/", (res) => {
    console.log("Received response:", res.statusCode);
});

// https.globalAgent
console.log("Global agent:", https.globalAgent);

// https.request(options[, callback])
const options = {
    hostname: "www.example.com",
    port: 443,
    path: "/",
    method: "GET",
};
const request = https.request(options, (res) => {
    console.log("Received response:", res.statusCode);
});
request.end();

// https.STATUS_CODES
console.log("HTTP status codes:", https.STATUS_CODES);
