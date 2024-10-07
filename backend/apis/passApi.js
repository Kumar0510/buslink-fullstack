const express = require('express')
const passApp = express.Router();
const bcryptjs = require('bcryptjs');
require('dotenv').config();
let jwt = require('jsonwebtoken');
// to verify the jwt token
let verifyToken = require('../middleware/tokenVerify');
let expressAsyncHandler = require('express-async-handler');


passApp.get('/pass',expressAsyncHandler(async (req, res)=>{
    //get users collection obj
    const passCollec = req.app.get('passCollec');
    //get users data from db
    let users = await passCollec.find().toArray();
    //send data to http client
    res.send({message: "from pass api", payload : users});
}))

passApp.post('/pass/:username', expressAsyncHandler(async (req, res) =>{ 
    const passCollec = req.app.get("passCollec");
    let userName = req.params.username;
    let newUser = req.body;

    let findres = await passCollec.findOne({username : userName})

    if(findres){
        res.send({message: "User pass already exists"});
    }
    else{
        let dur = newUser.duration+'d';
        console.log(dur);
        let signedToken = jwt.sign({username:userName}, process.env.SECRET_KEY, {expiresIn: dur})
        newUser.token = signedToken;
        newUser.username = userName;
        await passCollec.insertOne(newUser);
        res.send({message: "User pass created"});
    }
    
}))

passApp.delete('/pass/:username', expressAsyncHandler(async (req, res) =>{
    const passCollec = req.app.get("passCollec");
    let userName = req.params.username;

    let findres = await passCollec.findOne({username : userName})

    if(findres){
        passCollec.deleteOne({username:userName})
        res.send({message: "user pass is deleted"})
    }
    else{
        res.send({message: "user is not found"})
    }
}))

//find pass by username
passApp.get('/pass/:username', expressAsyncHandler(async (req, res)=>{
    const passCollec = req.app.get('passCollec');
    let userCred = req.params.username;
    //get users data from db
    let user = await passCollec.findOne({username : userCred});
    //send data to http client
    if(user === null)
    res.send({message: "no user found"});
    else res.send({message: "user found", payload: user})
}))

passApp.get('/passcheck/:username', expressAsyncHandler(async (req, res)=>{
    const passCollec = req.app.get('passCollec');
    let userCred = req.params.username;
    //get users data from db
    let user = await passCollec.findOne({username : userCred});
    //console.log(user.token);
    if(user === null)
    res.send({message: "no user found"});
    else{
        try{
            let decode = jwt.verify(user.token, process.env.SECRET_KEY);
            res.send({message: "user found", payload: user})
        }catch{
            res.send({message: "Token expired"});
        }
    }    
}))

module.exports = passApp;