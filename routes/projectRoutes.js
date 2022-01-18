const express = require("express");
const projectController = require("../controllers/projectController");

const router = express.Router();
router.get("/", projectController.project_get_all);

module.exports = router;
