const express = require("express");

// Initialization of express

const app = express();

// Setting an initial route which says "Hello World " Just for check

app.get("/", (req, res) => res.send("Hello World"));

// Defining the port - process.env.PORT - when deployed in heroku default port number is used

const port = process.env.PORT || 5000;

// It makes the express app to listen to that specific port and returns some text showing its port number

app.listen(port, () => console.log(`Server running in port ${port}`));

/* ---  Nodemon started in npm spript -- Start the server with nodemon as -- npm run server-- */
