// console.log("Node.js");
const express = require("express");
const mongouse = require("mongoose");
const router = require("./routes/routes");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.port || 5000;
app.use(express.json());
app.use(cors());

mongouse
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log(`conected to mongodb`);
  })
  .catch((err) => {
    console.log(err);
  });
app.use(router);
app.listen(PORT, () => {
  console.log(`listing on : ${PORT}`);
});
