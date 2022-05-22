const cusModel = require("../models/cusModel");

exports.getCustomersList = (req, res) => {
  cusModel.getAllCustomers((err, customers) => {
    if (err) res.send(err);
    console.log("Customers", customers);
    res.send(customers);
  });
};
