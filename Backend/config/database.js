const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((data) => {
      console.log(`DB connected with server: ${data.connection.host}`);
    });
    //Dont needed bcs we're using "Unhandled Promise Rejection"
  // .catch((err)=>{     
  //     console.log("Error:",err)
  // })
};

module.exports = connectDB;
