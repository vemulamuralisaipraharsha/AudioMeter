const express = require("express");
const router = express.Router();
const inputController = require("../controllers/inputController");

router.get("/",inputController.getInput);
router.post("/", inputController.postInput);

module.exports = router;