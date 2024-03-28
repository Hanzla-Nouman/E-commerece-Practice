const app = require('./app')

const dotenv = require('dotenv')
const connectDB = require("./config/database")

// Handling Uncaught Exception 
process.on("uncaughtException",err=>{
    console.log(`Error :${err.message}`)
    console.log(`Shutting down the server due to Uncaught Exception`)
        process.exit(1)
    
})
       
//Config   
dotenv.config({path:"backend/config/config.env"});

connectDB(); 

const server = app.listen(process.env.PORT,()=>{
    console.log(`listening on ${process.env.PORT}`)
})

// Unhandled Promise Rejection // To shutdown the server in case of error
process.on("unhandledRejection",err=>{
    console.log(`Error :${err.message}`)
    console.log(`Shutting down the server due to unhandled Promise Rejection`)

    server.close(()=>{
        process.exit(1)
    })
})