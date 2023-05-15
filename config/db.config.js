const mongoose = require("mongoose");

const connectDb = (url) => {
  try {
    return mongoose.connect(
      url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      console.log("Connected to database...")
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDb