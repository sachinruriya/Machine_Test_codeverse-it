const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth.js");
const {homepage,createBook,createUser,loginUser,fetchbook,updatebook,deletebook}= require("../controllers/appController.js")
router.get("/",homepage)
router.post("/register",createBook);
router.post("/cretaeUser",createUser);
router.post("/loginUser",loginUser);

router.get("/books",adminAuth,fetchbook);
router.post("/books/update",adminAuth,updatebook);
router.delete("/books/delete",adminAuth,deletebook);
module.exports= router;