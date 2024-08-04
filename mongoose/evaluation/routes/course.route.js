const express = require("express")

const courseRouter = express.Router()

courseRouter.get("/",async(req,res)=>{
    res.send("this is course router")
})

module.exports = courseRouter