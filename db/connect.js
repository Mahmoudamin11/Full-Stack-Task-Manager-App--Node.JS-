const mongoose = require("mongoose");

const connectionString = `${process.env.MONGO_URI}`;
const connectDB = () => { 
    // returns a promise
    return mongoose
      .connect(connectionString)
    //   .then(() => {
    //     console.log(`Connected To The DB...`);
    //   })
    //   .catch((err) => {
    //     console.log(`err -> `, err);
    //   });
}

module.exports = connectDB