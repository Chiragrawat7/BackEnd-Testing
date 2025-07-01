const express=require('express');
const app=express();
const cookieParser = require("cookie-parser");
app.use(express.json());

require('dotenv').config();
const port=process.env.PORT;

app.use(cookieParser())

// importing routes and mounting 
const routes=require('./routes/Routes')
app.use('/api/v1',routes);

// activate 
app.listen(port,()=>{
    console.log(`App is running on port no. ${port}`);
})
app.get('/',(req,res)=>{
    res.send("This is Home page");
})
// connection with DB
const {DbConnect}=require('./config/databse')
DbConnect();