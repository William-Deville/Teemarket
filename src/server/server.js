const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require('./routes/user.routes');
const path = require("path");
const app = express();
require('dotenv').config({path: './config/.env'});
require('./config/db');
app.use(express.static(path.resolve(__dirname, "../../bin/client")));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//routes
app.use('/api/user', userRoutes);

//server
app.listen(process.env.PORT, () =>
    console.log(`🚀 Server is listening on port ${process.env.PORT}`),
);
