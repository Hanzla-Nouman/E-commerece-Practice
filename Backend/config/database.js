const mongoose = require("mongoose");
 
// const connectDB = () => {
//   mongoose
//     .connect(process.env.DB_URI) 
//     .then((data) => {
//       console.log(`DB connected with server: ${data.connection.host}`);
//     });
//     //Dont needed bcs we're using "Unhandled Promise Rejection"
//   // .catch((err)=>{     
//   //     console.log("Error:",err) 
//   // }) 
// };   
const connectDB = () => { 
  mongoose  
    .connect(process.env.DB_URI)   
    .then((data) => {
      console.log(`DB connected with server: ${data.connection.host}`);
    })
    .catch((err) => { 
      console.log(process.env.DB_URI)
      console.log("Error connecting to the database:", err);
    }); 
};

module.exports = connectDB; 
