const express = require("express");
const app = express();
const home = require("./routes/home.js");
const about = require("./routes/home.js");

app.use(express.static("public"));

const PORT = 3030;

app.use("/", home);
app.use("/", about);

app.listen(PORT, ()=>{console.log("Servidor funcionando en http://localhost:" + PORT)});