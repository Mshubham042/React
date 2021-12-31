const mongoose = require('mongoose');

const userschema = mongoose.Schema({
    username:String,
    name:String,
    password:String,
}) 
const usermodel = mongoose.model("fullstack",userschema,"fullstack");

module.exports = usermodel;