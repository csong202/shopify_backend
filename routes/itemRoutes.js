const express = require("express");
const itemController = require("../controllers/itemController");

const router = express.Router();
// create
router.post("/", itemController.item_create);
// edit
router.patch("/edit/:id/:field/:value", itemController.item_edit);
// delete
router.delete("/delete/:id", itemController.item_delete);
// viewing items
router.get("/", itemController.item_get_all);
router.get("/:id", itemController.item_get_byID);
// filtering based on field and value
router.get("/:field/:value", itemController.item_query);

module.exports = router;
