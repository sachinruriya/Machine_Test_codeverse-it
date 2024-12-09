const {Book} = require("../models/book.js");
const {Book_user}= require("../models/bookuser.js")
const {where} = require("sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
var nodemailer = require('nodemailer');

async function homepage(req,res){
    res.send("home page");
}


async function createBook(req,res){
    const {name , author , price , description} = req.body;
    try {

        const createdbook = await Book.create({
            bookname:name,
            Authorname:author,
            Price:price,
            Description:description
    
        });
        if(createdbook){
            return res.status(201).send({message:createdbook});
        }
        
    } catch (error) {
        return res.status(401).send({message:"book not creted"})
    }
    
    
}
async function createUser(req,res){
    var salt = 10;
    const {username,password,age,phone,email} = req.body;
    var otp = Math.floor(1000 + Math.random() * 9000);
    try {
        const hashedPassword=  await bcrypt.hash(password,salt)
    const userCreated = await Book_user.create({
        username:username,
        password:hashedPassword,
        age:age,
        phone:phone,
        email:email
    }) 

    res.send(userCreated);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: username,
          pass: password
        }
      });
      
      var mailOptions = {
        from: username,
        to: email,
        subject: 'Sending Email using Node.js',
        text: `hello account resgiteration your otp is ${otp}
        please verfy http://localhost:8000/otp/verify`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    return res.status(200).send({message:"user created succesfully"});
    } catch (error) {
        return res.status(401).send({error:"user not created"})
    }
    
}
async function loginUser(req,res){
    const {username,password} = req.body;
    try {
        const userCreated = await Book_user.findOne({where:{

            username:username
        },}) ;
        const hashedPassword=  await bcrypt.compare(password,userCreated.password)
       if(!hashedPassword){
        return res.status(401).send({message:"credential invalid"});
       }
       if(userCreated.verified == "No"){
        return res.status(401).send({error:"user not verified"})

       }
       const token = jwt.sign({id:userCreated.id,role:userCreated.role},"rvdg14581vdtdt###");
       if(token){
         return res.status(200).send({message:"user fetched successfully",Authtoken:token});
       }
    } catch (error) {
        return res.status(401).send({error:"user not created"})
    }
    
}

async function fetchbook(req,res){
    
    try {
        const fetcheddata = await Book.findAll();
        return res.status(200).send(fetcheddata)
    } catch (error) {
        return res.status(401).send(error)
    }
    
}
async function updatebook(req,res){
    const{name,author,price,description}= req.body;

    try {
        const fetcheddata = await Book.update(
            {
            bookname:name,
            Authorname:author,
            Price:price,
            Description:description
        },
        {id},
        );
        
        return res.status(200).send(fetcheddata)
    } catch (error) {
        return res.status(401).send(error)
    }
    
}
async function deletebook(req,res){
    return res.send("delete");
}
module.exports = {homepage,createBook,createUser,loginUser,fetchbook,updatebook,deletebook};