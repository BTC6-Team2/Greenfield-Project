const express = require("express");
const app = express();

app.set("view engine", "hbs");

app.use(express.urlencoded({ extended: false }));
// これ何？
app.use("/", require("./routes/index"));

app.listen(3000, console.log("Server listening port 3000..."));
