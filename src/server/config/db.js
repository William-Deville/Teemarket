const mongoose = require("mongoose");
const {DB_USER_PASS} = process.env;

mongoose
    .connect(`mongodb+srv://Araghonne:NothingWrong@datplate.tgyz6.mongodb.net/Datplate`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true,          //!!!!!!!!!
            //useFindAndModify: false,       //!!!!!!!!!
        }
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect to MongoDB", err));
