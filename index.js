const express = require("express");
const bodyParser = require("body-parser");

// create express app
const app = express();

// setup the server port
const port = process.env.PORT || 5533;

// parse requset data content type application
app.use(bodyParser.urlencoded({ extended: false }));

// parse request data content type application/json
app.use(bodyParser.json());

// import user route
const cusRoutes = require("./src/routes/cusRoute");

// create user routes
app.use("/api/v1/customers", cusRoutes);

// listen to the port
app.listen(port, () => {
  console.log(`Express Server is running at port ${port}`);
});
