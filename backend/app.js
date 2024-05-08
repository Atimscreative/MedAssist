const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

mongoose
  .connect(
    "mongodb+srv://dbMedAssist:MedAssist@2024@clustermedassist.5kyllql.mongodb.net/medassist?retryWrites=true&w=majority&appName=ClusterMedAssist",
  )
  .then(() => {
    console.log("Database Connected!");
    app.listen(3000, () => {
      console.log("App Connected and running!");
    });
  })
  .catch(() => {
    console.log("Failed to connect");
  });
