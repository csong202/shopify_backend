const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const projectRoutes = require("./routes/projectRoutes");
const bodyParser = require("body-parser");

// connecting to mongodb
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

const app = express();
const PORT = 8080;

app.use(cors());

app.get("/", (req, res) => res.send("Hello from homepage."));
app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);

// parses the text as json and exposes the resulting object on req.body
app.use(bodyParser.json());
app.use("/projects", projectRoutes); // project routes
