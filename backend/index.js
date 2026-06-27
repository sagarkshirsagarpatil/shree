const express=require('express');
const client=require('./DB/model')
const cors=require('cors')
const dotenv=require('dotenv');
dotenv.config()
require('./DB/DB')
  const app=express();
  app.use(cors());

 app.use(express.json());
 app.get('/getdata',async(req,res)=>{
   const clientData = await client.find();
    res.json(clientData);
 })

 app.post('/postdata',async(req,res)=>{
    const data=req.body;
    console.log(data)
        const student = new client(req.body);
    await student.save();
    res.send("Student Added Successfully");

 })


 app.listen(4000,()=>{
    console.log("server running on 4000.....")
 })







