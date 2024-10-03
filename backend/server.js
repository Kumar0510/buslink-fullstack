const express = require('express')
const app = express();
const cors = require('cors')

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173"
}))


const userApp = module.require("./apis/userApi");
app.use('/user-api', userApp);
app.use('*', (req,res,)=>{
    res.send({message: "invalid path"});
})