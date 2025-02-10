const mongoose = require("mongoose");
require("dotenv").config();

const connectToDB = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Database connected");
        })
        .catch(() => {
            console.log("Error in connecting to DB");
        })
}

module.exports = connectToDB;



// 0Vf9kfs570qObLcW