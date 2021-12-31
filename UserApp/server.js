const express = require('express')
const mongoose = require('mongoose');
const { json } = require('express/lib/response')
const usermodel = require('./model/user')
const app = express()
app.use(express.json());
const port = 4000

mongoose.connect("mongodb://localhost:27017/subh").then(() => console.log("connected"));

app.get('/index' , (req, res) => res.send('you are on index page'));

app.post('/register', async(req,res) => {
 
      const user = req.body;
      await usermodel.create(user)

      return res.json({data:user})
})

app.post('/getuser' , async(req,res) => {

     const users = await usermodel.find()

     return res.json({data:users})
})

app.post('/login' , async(req,res) => {

      const loginuser = req.body
      const userdata = await usermodel.find(loginuser)

      return res.json({data:userdata})


})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))