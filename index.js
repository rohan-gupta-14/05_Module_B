const express = require('express');
const mongoose = require('mongoose');
const {User,Profile,Users,Category,Request,Report} = require("./Model/User.js");

const app = express();

mongoose.connect('mongodb://localhost:27017/User')

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Use Postman to check')
})

app.post('/api/auth/register', async(req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
})

app.post('/api/auth/login', async(req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({ email, password });
  if(user){
    return res.json({message:"Login Successfully"});
  }
  return res.status(401).json({message:"Invalid credentials"});
})

app.get("/api/auth/profile", async (req,res)=>{
    const profile = await Profile.find();
    res.json(profile);
});

app.post('/api/auth/logout', async(req, res) => {
  return res.json({message:"Logout Successfully"});
})

app.get("/api/users", async (req,res)=>{
    const user = await Users.find();
    res.json(user);
});

app.get("/api/users/:id", async (req,res)=>{
    const user = await Users.findById(req.params.id);
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    res.json(user);
});

app.post('/api/categories', async(req, res) => {
  const category = new Category(req.body);
  await category.save();
  res.json(category);
})

app.get("/api/categories", async (req,res)=>{
    const category = await Category.find();
    res.json(category);
});

app.put("/api/categories/:id", async (req,res)=>{
    const category = await Category.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(category);
});

app.post('/api/requests', async(req, res) => {
  const request = new Request(req.body);
  await request.save();
  res.json(request);
})

app.get("/api/requests", async (req,res)=>{
    const request = await Request.find();
    res.json(request);
});

app.get("/api/requests/:category_id", async (req,res)=>{
    const request = await Request.findById(req.params.category_id);
    if(!request){
        return res.status(404).json({message:"Request not found"});
    }
    res.json(request);
});

app.put("/api/requests/:category_id/assign", async (req,res)=>{
    const request = await Request.findByIdAndUpdate(req.params.category_id,req.body,{new:true});
    res.json(request);
});

app.put("/api/requests/:category_id/status", async (req,res)=>{
    const request = await Request.findByIdAndUpdate(req.params.category_id,req.body,{new:true});
    res.json(request);
});

app.put("/api/requests/:category_id/cancel", async (req,res)=>{
    const request = await Request.findByIdAndUpdate(req.params.category_id,req.body,{new:true});
    res.json(request);
});

app.post('/api/requests/:category_id/comments', async(req, res) => {
  const request = new Request(req.body);
  await request.save();
  res.json(request);
})

app.get("/api/requests/:category_id/comments", async (req,res)=>{
    const request = await Request.findById(req.params.category_id);
    if(!request){
        return res.status(404).json({message:"Comment not found"});
    }
    res.json(request);
});

app.get("/api/reports/summary", async (req,res)=>{
    const report = await Report.find();
    res.json(report);
});

app.get("/api/reports/category-wise", async (req,res)=>{
    const report = await Report.find();
    res.json(report);
});


app.listen(8000,()=>{
    console.log("Server is Running on port 8000");
})
