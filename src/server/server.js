const express = require("express");
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
const posterRoutes = require('./routes/poster.routes');
const path = require("path");
const app = express();
const {APP_PORT} = process.env;
const {checkUser, requireAuth} = require('./middleware/auth.middleware');
const { use } = require("./routes/user.routes");
require('./config/db');
app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id);
});


//routes
app.use('/api/user', userRoutes);
app.use('/api/poster', posterRoutes);

//server
app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}`),
);
