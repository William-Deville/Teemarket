const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config({path: './.env'});

mongoose
    .connect("mongodb+srv://Araghonne:NothingWrong" +/* process.env.DB_USER_PASS + */"@datplate.tgyz6.mongodb.net/Datplate",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true,          //!!!!!!!!!
            //useFindAndModify: false,       //!!!!!!!!!
        }
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect to MongoDB", err));
    console.log(mongoose.connect);