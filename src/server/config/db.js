const mongoose = require("mongoose");
const {DB_USER_PASS} = process.env;

mongoose
    .connect(`mongodb+srv://${DB_USER_PASS}@datplate.tgyz6.mongodb.net/Datplate`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect to MongoDB", err));
