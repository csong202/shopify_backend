const { Project } = require("../models/project");

// list of projects that is stored inside mongoDB
const project_get_all = (req, res) => {
  Project.find() // uses Project schema to find() all projects t
    .sort({ createdAt: -1 }) // sort results by the createdAt tag (descending order, newly created first)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res
        .status(400)
        .send("Ther is an error in the server while loading projects");
    });
};

module.exports = { project_get_all };
