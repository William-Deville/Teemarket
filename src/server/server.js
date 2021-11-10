const express = require("express");
const userRoutes = require('./routes/user.routes');
const path = require("path");
const app = express();
const {APP_PORT} = process.env;
require('./config/db');
app.use(express.static(path.resolve(__dirname, "../../bin/client")));


app.use(express.json());
app.use(express.urlencoded({extended: true}));


//routes
app.use('/api/user', userRoutes);

//server
app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}`),
);
