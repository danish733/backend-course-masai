const express = require("express")
const connection = require("./config/db")
const userRouter = require("./routes/user.route")
const port = 8080

const app = express()

app.use(express.json())
app.use("/user", userRouter)

app.get("/",(req,res)=>{
    res.send("welcome to evalution")
})


app.listen(port,async(req,res)=>{
    await connection
    try {
       console.log(`connected to server http://localhost/${port} and connected to database`) 
    } catch (error) {
        console.log("Error in connecting server")
    }
})