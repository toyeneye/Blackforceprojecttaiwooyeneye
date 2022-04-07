
var express = require("express");
var router = express.Router();

var specsController = require("../controllers/specs");
/* GET home page. */
router.get("/", specsController.getAllPosts);

router.post("/", specsController.createAPost);

router.get("/:id/delete", specsController.deleteAPost);

// get record detail
router.get("/:id/edit", specsController.editAPost);

// update record
router.post("/:id/edit", specsController.updateAPost);

// http://localhost:3000/blog/1/delete

// get post delete
// delete
// update

module.exports = router;

