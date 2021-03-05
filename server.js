// Setup empty JS object to act as endpoint for all routes
const projectData = [];
// Express to run server and routes
import express, { static } from "express";

// Start up an instance of app
const app = express();

/* Dependencies */
import { urlencoded, json } from "body-parser";

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(urlencoded({ extended: false }));
app.use(json());

// Cors for cross origin allowance
import cors from "cors";
app.use(cors());

// Initialize the main project folder
app.use(static("website"));

// Spin up the server
const port = 8000;
const server = app.listen(port, listening);

function listening() {
  console.log("server running");
  console.log(`running on localhost: ${port}`);
}
// Callback to debug

// Initialize all route with a callback function

// Callback function to complete GET '/all'


app.get("/all", function (req, res) {
    res.send(projectData)
});
// Post Route
app.post("/add", function (req, res) {
  projectData.push(req.body);
  
  console.log(projectData);
  
});
