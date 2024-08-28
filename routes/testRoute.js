const express = require("express");
const router = express.Router();
const testController = require('../controllers/testController')

router.get("/", testController.getTest);
router.get("/result", testController.getTestResult);

module.exports = router;