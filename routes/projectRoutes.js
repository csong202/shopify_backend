const express = require("express");
const projectController = require("../controllers/projectController");

const router = express.Router();
// create
router.post("/", projectController.project_create);
// edit
router.patch("/edit/:id/:field/:value", projectController.project_edit);
// delete
router.delete("/:id", projectController.project_delete);
// viewing items
router.get("/", projectController.project_get_all);
router.get("/:id", projectController.project_get_byID);
// filtering based on field and value
router.get("/:field/:value", projectController.project_query);

module.exports = router;
