const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();

// Use body parsing middleware
// Parses incoming request bodies in a middleware before your handlers, available under the req.body property. This allows you to easily access form data or JSON payloads sent by clients.
app.use(express.json()); // Parses incoming requests with JSON payloads.
app.use(express.urlencoded({ extended: true })); //  Parses incoming requests with URL-encoded payloads.

// Use static file middleware
// Serves static files such as HTML, CSS, JavaScript, and images. This middleware is useful for serving front-end assets like stylesheets, scripts, and images directly from the server.
app.use(express.static("public")); // Serves static files from a specified directory.

// Use logging middleware
// Logs HTTP requests and errors. This middleware is helpful for debugging and monitoring your application's traffic and errors.
app.use(morgan("combined")); // HTTP request logger middleware.

// Use security middleware
// Enhances security by setting various HTTP headers. These headers help protect your application from common web vulnerabilities and attacks.
app.use(helmet()); // Helps secure Express apps by setting various HTTP headers.

// Use CORS middleware
// Enables Cross-Origin Resource Sharing (CORS) for your application. This middleware allows you to control which domains can access your server's resources.
app.use(cors()); // Allows you to configure CORS settings.

// Use cookie parsing middleware
// Parses Cookie header and populates req.cookies with an object keyed by the cookie names. This middleware facilitates handling of HTTP cookies sent by the client.
app.use(cookieParser()); // Parses cookies attached to the client request object.

// Use session middleware
// Manages user sessions. This middleware helps maintain user state across multiple HTTP requests.
app.use(
    session({
        secret: "your_secret_key",
        resave: false,
        saveUninitialized: true,
    })
); // Simple session middleware for Express.

// Use compression middleware
// Compresses response bodies to reduce the size of the response. This middleware is useful for improving application performance by reducing bandwidth usage.
app.use(compression()); // Compression middleware for compressing response bodies.

// Example route
app.get("/", (req, res) => {
    res.send("Hello, world!");
});

// Error handling middleware
// Catches and processes errors that occur during request handling.
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*Error Handling Middleware
Purpose: 
    - Catches and processes errors that occur during request handling. This middleware ensures that errors are properly handled and appropriate responses are sent to clients.
Example:
    - Custom error-handling middleware function.
    */
