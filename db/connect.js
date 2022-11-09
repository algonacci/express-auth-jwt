const mongoose = require("mongoose");

const connectDB = (URL) => {
  return mongoose
    .connect(URL)
    .then(() => console.log("💽 [DATABASE] SUCCESS Connected to MongoDB!"))
    .catch((error) =>
      console.log(`⚠️ [ERROR], Error connecting to MongoDB!, because ${error}`)
    );
};

module.exports = connectDB;
