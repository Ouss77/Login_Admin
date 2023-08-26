'use strict';
// Import mongoose
    const mongoose = require("mongoose");

// Declare schema and assign Schema class
    const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
    const users_login = new Schema({
        username:{
            type:String,
            required:true,
            unique: true
        },
        email:{
            type: String,
            required: true
        },
        password: {
            type:String,
            required:true
        }, 
        scores: {
            type: Number,
            default: 0
          }
    });

// create and export model
module.exports = mongoose.model("users_login", users_login);

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
  });