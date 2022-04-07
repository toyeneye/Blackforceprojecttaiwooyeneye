var express = require("express");
var router = express.Router();

var introController = require("../controllers/intro");

/* GET home page. */
router.get("/", introController.getHome);

module.exports = router;
