const express = require("express")
const UserModel = require("../models/user.model")

const userRouter = express.Router()

userRouter.get("/",async(req,res)=>{
   try {
    const getUser = await UserModel.find()
    res.send(getUser)
   } catch (error) {
    res.send(error)
   }
})

userRouter.post("/",async(req,res)=>{
    const {username, password} = req.body

    try {
        const existUsername = await UserModel.findOne({username})
        if(existUsername){
            return res.send("Username already exist")
        }
        else{
            const addUser = new UserModel({
                username,
                password
            })
            await addUser.save()
        }
        res.status(201).json({"msg":"User Added Successfully"})
    } catch (error) {
        res.status(404).json({"err":"Error in add user", error})
    }
})

module.exports = userRouter