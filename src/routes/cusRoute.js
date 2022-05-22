const express = require("express");
const router = express.Router();

const cusController = require("../controllers/cusController");

// get all customers
router.get("/", cusController.getCustomersList);

// create new customer
router.post("/", cusController.createNewCustomer);

// update customer
router.put("/:id", cusController.updateCustomer);

// delete customer
router.delete("/:id", cusController.deleteCustomer);

module.exports = router;
