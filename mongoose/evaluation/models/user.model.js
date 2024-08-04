const mongooose = require("mongoose")

const userSchema = mongooose.Schema({
    username:{type:String, required:true,unique:true},
    password:{type:String,required:true}
})

const UserModel = mongooose.model("user",userSchema)

module.exports = UserModel