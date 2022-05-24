const cusModel = require("../models/cusModel");

// get customers all
exports.getCustomersList = (req, res) => {
  cusModel.getAllCustomers((err, customers) => {
    if (err) res.send(err);
    console.log("Customers", customers);
    res.send(customers);
  });
};

// get customer by limit
exports.getCustomerBylimit = (req, res) => {
  cusModel.getByLimitCustomers(req.params.numl, (err, customers) => {
    if (err) res.send(err);
    console.log("Customers", customers);
    res.send(customers);
  });
};

// create new customer
exports.createNewCustomer = (req, res) => {
  const customerReqData = new cusModel(req.body);
  console.log("customerReqData", customerReqData);
  // check null
  if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({
      success: false,
      message: "Please fill fields",
    });
  } else {
    cusModel.createCustomer(customerReqData, (err, customer) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "Customer Create Successfully!",
        data: customer,
      });
    });
  }
};

// create new multiple customer
exports.createNewMultiCustomer = (req, res) => {
  const customerMultiReqData = new cusModel(req.body);
  console.log("customerMultiReqData", customerMultiReqData);
  // check null
  if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({
      success: false,
      message: "Please fill fields",
    });
  } else {
    cusModel.createMultiCustomer(
      req.params.record,
      customerMultiReqData,
      (err, customer) => {
        if (err) res.send(err);
        res.json({
          status: true,
          message: "Customer Create Mutiple Successfully!",
          // data: customer,
        });
      }
    );
  }
};

// update customer
exports.updateCustomer = (req, res) => {
  // console.log(req.params.id);
  const customerReqData = new cusModel(req.body);
  console.log("customerReqData update", customerReqData);

  // check null
  if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({
      success: false,
      message: "Please fill all fields",
    });
  } else {
    cusModel.updateCustomer(req.params.id, customerReqData, (err, customer) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "Customer Updated Successfully!",
        data: customer,
      });
    });
  }
};

// delete customer
exports.deleteCustomer = (req, res) => {
  cusModel.deleteCustomer(req.params.id, (err, customer) => {
    if (err) res.send(err);
    res.json({
      success: true,
      message: "Customer deleted successfully!",
    });
  });
};
