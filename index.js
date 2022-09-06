const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});

router.get("/admin", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/admin_dashboard.html"));
});

app.use("/", router);
app.listen(process.env.port || 2000);
