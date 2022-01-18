const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://csong202:<1Mongo>@cluster0.ty41r.mongodb.net/shopify_db?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, userUnifiedTopology: true })
  .then(function (result) {
    console.log("Database is connected");
  })
  .catch((err) => console.log(err));
