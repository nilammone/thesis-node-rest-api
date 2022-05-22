const mysql = require("mysql");

// create mysql connection
const dbconn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Andy@2021",
  database: "thesis_db",
});

dbconn.connect(function (error) {
  if (error) throw error;
  console.log("Database connected!");
});
module.exports = dbconn;
