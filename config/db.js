const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to MongoDB : ${mongoose.connection.host}`.bgGreen.white
    );
  } catch (error) {
    console.log(`Error Occured : ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
