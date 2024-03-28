const mongoose = require ("mongoose");

const connectDB = () =>{
mongoose.connect(process.env.DB_URI,{
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
}).then((data)=>{
    console.log(`DB connected with server: ${data.connection.host}`)
}).catch((err)=>{
    console.log("Error:",err)
})
}

module.exports = connectDB;