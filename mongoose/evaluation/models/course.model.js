const mongoose = require("mongoose")

const courseSchema = mongoose.Schema({
    title:{type:String, required:true},
    category:{type:String, required:true},
    difficulty:{type:String, required:true},
    description:{type:String, required:true}
})

const CourseModel = mongoose.model("course",courseSchema)

module.exports = CourseModel