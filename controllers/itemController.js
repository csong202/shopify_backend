const req = require("express/lib/request");
const { Item } = require("../models/item");

// list of items that is stored inside mongoDB
const item_get_all = (req, res) => {
  Item.find() // uses Item schema to find() all items t
    .sort({ createdAt: -1 }) // sort results by the createdAt tag (descending order, newly created first)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res
        .status(400)
        .send("There is an error in the server while loading items");
    });
};

// get route
const item_get_byID = (req, res) => {
  // req is the input request sent from frontend
  const id = req.params.id;
  Item.findById(id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// post
const item_create = (req, res) => {
  const item = new Item(req.body);
  item
    .save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// delete
const item_delete = (req, res) => {
  const id = req.params.id;
  Item.findByIdAndRemove(id)
    .then((result) => {
      res.status(200).send(result);
      console.log("deleted: " + result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
  // fetch(`https://localhost:${8080}/items/${id}`, { method: "DELETE" })
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .catch((error) => console.log(error));
  // $.ajax({
  //   type: "DELETE",
  //   url: "http://localhost:8080/items/" + id,
  // }).done(function (result) {
  //   $("#json").html(JSON.stringify(result));
  //   var resultHtml = "Deleted";
  //   $("#result").html(resultHtml);
  // });
};

// query
const item_query = (req, res) => {
  const { field, value } = req.params;
  Item.find({ [field]: value })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// edit
const item_edit = (req, res) => {
  const { id, field, value } = req.params;
  console.log({ "req.params": req.params });
  Item.findByIdAndUpdate(id, { [field]: value }, (err, _result) => {
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
  item_get_all,
  item_get_byID,
  item_create,
  item_delete,
  item_query,
  item_edit,
};
