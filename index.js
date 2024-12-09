const express = require("express");
const PORT = 8000;
const bodyparser = require("body-parser");
const router = require("./route/app.js");
// const bodyparser = require("body-parser");
const app = express();
const parserjson = bodyparser.json();
app.use(bodyparser.urlencoded({ extended: false }))

app.use(parserjson)

app.use(router);
app.listen(PORT,()=>{
    console.log(`http//:localhot:8000`);
});