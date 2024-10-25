//create http server
const express = require('express')
const app = express();
//import mongoclient
const {MongoClient}= require('mongodb');
const cors = require('cors')

app.use(express.json())
/*
app.use(cors({
    origin: "https://buslink-fullstack-xcwm.vercel.app"
}))
    */

app.use(cors)
require('dotenv').config()

//connecting to Mongo db server
let mCLient = new MongoClient(process.env.DB_URL);

mCLient.connect()
.then((connectionObj)=>{
    console.log("MongoDB connected");
    //connect to database that is julydb
    const buspassproject = connectionObj.db('buspassproject');
    //connect to users collection
    const usersCollec = buspassproject.collection('users');
    const passCollec = buspassproject.collection('pass')
    //to use users collection across the files
    app.set('usersCollec',usersCollec);
    app.set('passCollec', passCollec);
    //assign port to http server
    app.listen(process.env.PORT, ()=>{console.log(`server started on port ${process.env.PORT}`);});
})
.catch((err)=>{console.log("Error while connecting to mongo");})

//to seperate the users api request handlers and product api req handlers into seperate files 
const userApp = module.require("./apis/userApi");
const passApp = module.require("./apis/passApi");
//const productApp = module.require("./apis/productApi");
app.use('/user-api', userApp);
app.use('/pass-api', passApp);


app.use('*', (req,res,)=>{
    res.send({message: "invalid path"});
})

app.use((err, req, res, next)=>{
    res.send({message:"Error in code", errorMessage:`${err.message}`});
})
