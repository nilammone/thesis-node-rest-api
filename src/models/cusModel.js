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

// create new customer
Cus.createCustomer = (cusReqData, result) => {
  dbconn.query("insert into cus_data set ?", cusReqData, (err, res) => {
    if (err) {
      console.log("Error while inserting data");
      result(null, err);
    } else {
      console.log("Customer created successfully!");
      result(null, res);
    }
  });
};

// update customer
Cus.updateCustomer = (id, customerReqData, result) => {
  dbconn.query(
    "UPDATE cus_data set first_name = ?, last_name = ?, birth_date = ?, e_mail = ?, phone = ?, address = ? WHERE id = ?",
    [
      customerReqData.first_name,
      customerReqData.last_name,
      customerReqData.birth_date,
      customerReqData.e_mail,
      customerReqData.phone,
      customerReqData.address,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("Error while updating the customer");
        result(null, err);
      } else {
        console.log("Customer updated successfully!");
        result(null, res);
      }
    }
  );
};

// delete customer
Cus.deleteCustomer = (id, result) => {
  dbconn.query("DELETE FROM cus_data WHERE id = ?", [id], (err, res) => {
    if (err) {
      console.log("Error while deleting the customer");
      result(null, err);
    } else {
      console.log("Customer delete successfully!");
      result(null, res);
    }
  });
};

module.exports = Cus;
