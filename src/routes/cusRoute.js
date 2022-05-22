const express = require("express");
const router = express.Router();

const cusController = require("../controllers/cusController");

// get all customers
router.get("/", cusController.getCustomersList);

module.exports = router;
