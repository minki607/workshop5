const mongoose = require("mongoose");

const dbURI =
    "mongodb+srv://suh:suh82025126@cluster0-jph44.mongodb.net/";

const options = {
    useNewUrlParser: true,
    dbName: "INFO30005"
};

mongoose.connect(dbURI, options).then(
    () => {
        console.log("Database connection established!");
    },
    err => {
        console.log("Error connecting Database instance due to: ", err);
    }
);

require('./user.js');