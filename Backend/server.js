const app = require('./app')

const dotenv = require('dotenv')
const connectDB = require("./config/database")
       
//Config   
 
dotenv.config({path:"backend/config/config.env"});

connectDB(); 

app.listen(process.env.PORT,()=>{
    console.log(`listening on ${process.env.PORT}`)
})