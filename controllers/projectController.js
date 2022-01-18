const req = require("express/lib/request");
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

// get route
const project_get_byID = (req, res) => {
  // req is the input request sent from frontend
  const id = req.params.id;
  Project.findById(id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// post
const project_create = (req, res) => {
  const project = new Project(req.body);
  project
    .save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// delete
const project_delete = (req, res) => {
  const id = req.params.id;
  Project.findByIdAndDelete(id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports = {
  project_get_all,
  project_get_byID,
  project_create,
  project_delete,
};
