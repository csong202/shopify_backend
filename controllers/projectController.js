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
        .send("There is an error in the server while loading projects");
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

// query
const project_query = (req, res) => {
  const { field, value } = req.params;
  Project.find({ [field]: value })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// edit
const project_edit = (req, res) => {
  const { id, field, value } = req.params;
  console.log({ "req.params": req.params });
  Project.findByIdAndUpdate(id, { [field]: value }, (err, _result) => {
    if (err) {
      // res.status(400).send(err);
      res
        .status(400)
        .send(`error! id = ${id}, field = ${field}, value = ${value}`);
    } else {
      res.status(200).send(`the ${field} is now ${value}`);
    }
  });
};

module.exports = {
  project_get_all,
  project_get_byID,
  project_create,
  project_delete,
  project_query,
  project_edit,
};
