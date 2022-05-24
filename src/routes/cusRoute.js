const express = require("express");
const router = express.Router();

const cusController = require("../controllers/cusController");

// get all customers
router.get("/", cusController.getCustomersList);

// get by limit customers
router.get("/bylimit/:numl", cusController.getCustomerBylimit);

// create new customer
router.post("/", cusController.createNewCustomer);

// create new mutiple customer
router.post("/multi/:record", cusController.createNewMultiCustomer);

// update customer
router.put("/:id", cusController.updateCustomer);

// delete customer
router.delete("/:id", cusController.deleteCustomer);

module.exports = router;
