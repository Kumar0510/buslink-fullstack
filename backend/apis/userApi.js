const express = require('express')
const userApp = express.Router();
const bcryptjs = require('bcryptjs');
require('dotenv').config();
let jwt = require('jsonwebtoken');
// to verify the jwt token
let verifyToken = require('../middleware/tokenVerify');
let expressAsyncHandler = require('express-async-handler');

//route for get users
userApp.get('/users', expressAsyncHandler(async (req, res)=>{
    //get users collection obj
    const usersCollec = req.app.get('usersCollec');
    //get users data from db
    let users = await usersCollec.find().toArray();
    //send data to http client
    res.send({message: "from users", payload : users});
}))


userApp.get('/users/:username', async (req, res)=>{
    const usersCollec = req.app.get('usersCollec');
    let userCred = req.params.username;
    //get users data from db
    let user = await usersCollec.findOne({username : userCred});
    //send data to http client
    if(user === null)
    res.send({message: "no user found"});
    else res.send({message: "user found", payload: user})
})

/*
userApp.get('/users/:username', async (req, res) => {
    const usersCollec = req.app.get('usersCollec');
    let usercredUsername = req.params.username;
    let users = await usersCollec.findOne({username : usercredUsername});

    if(users === null) res.send({message: "user not exixts"});
})

*/
//route for post user
userApp.post('/users', async (req, res) =>{ 
    const usersCollec = req.app.get("usersCollec");
    let newUser = req.body;
    let userExist = await usersCollec.findOne({username : newUser.username});

    if(userExist !== null){
        res.send({message:"User already exits"});
    }else{
        let hashedPassword = await bcryptjs.hash(newUser.password, 7);
        newUser.password = hashedPassword;
        await usersCollec.insertOne(newUser);
        res.send({message: "User created"});
    }
})

//login with user authentications
userApp.post('/login', async (req, res)=>{
    const usersCollec = req.app.get('usersCollec');
    const userCred = req.body;

    let findInDbUser = await usersCollec.findOne({username : userCred.username});
    if(findInDbUser === null){
        res.send({message: "Username is invalid"});
    }
    else {
        //let password = 123;
        let passcheck = await bcryptjs.compare(userCred.password, findInDbUser.password);
        
        if(passcheck === false) res.send({message: "password is invalid"});
        else{
            //create jwt token
            let signedToken = jwt.sign({username:userCred}, process.env.SECRET_KEY, {expiresIn:'1d'})
            res.send({message: "login success", token:signedToken, users:findInDbUser});
        }
    }
});

// route to update user
userApp.put('/user', async (req, res) =>{
    console.log('put req in user')
    usersCollec = req.app.get('userCollec');
    let modifiedUser = req.body;
    await usersCollec.updateOne({username: modifiedUser.username}, {$set :{...modifiedUser}})
    res.send({message: "user modified"});
})

//cart for user api
userApp.put('/add-to-cart/:username', expressAsyncHandler(async(req, res)=>{
    let usersCollec = req.app.get('usersCollec');
    let usernameFromUrl = req.params.username;
    let cartObj = req.body;

    let ans = await usersCollec.updateOne({username: usernameFromUrl}, {$push: {products: cartObj}});
    res.send({message: "product added to the cart", payload: ans})
}))

userApp.get('/cart/:username', expressAsyncHandler(async(req, res) =>{
    const usersCollec = req.app.get('usersCollec');
    let usernameFromUrl = req.params.username;
    let cart = await usersCollec.findOne({username: usernameFromUrl});
    res.send({message:"cart", payload: cart});
}))
// route to delete user
userApp.delete('/user/:id', (req, res) =>{
    
})


module.exports = userApp;