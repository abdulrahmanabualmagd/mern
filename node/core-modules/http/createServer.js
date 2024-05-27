// Import http Module
const http = require("http");

// Create Server
const server = http.createServer(
    // Handling Request and Response
    (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, World!\n");
});

// Start Listening (launch Server)
server.listen(3000, "localhost", () => {
    console.log("Server Running at http://localhost:3000/");
});
