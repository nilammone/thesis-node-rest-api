var dbconn = require("../../config/dbConfig");

var Cus = function (cus) {
  this.first_name = cus.first_name;
  this.last_name = cus.last_name;
  this.birth_date = cus.birth_date;
  this.e_mail = cus.e_mail;
  this.phone = cus.phone;
  this.address = cus.address;
};

// get all customers
Cus.getAllCustomers = (result) => {
  dbconn.query("select *from cus_data", (err, res) => {
    if (err) {
      console.log("Error while fetching customers", err);
      result(null, err);
    } else {
      console.log("Customers fetched successfully!");
      result(null, res);
    }
  });
};

module.exports = Cus;
