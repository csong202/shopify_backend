const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://csong202:<mongoDB123>@cluster0.ty41r.mongodb.net/shopify_db?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    auth: { username: "csong202", password: "mongoDB123" },
  })
  .then(function (result) {
    console.log("Database is connected");
  })
  .catch((err) => console.log(err));
