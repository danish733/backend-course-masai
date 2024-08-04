const express = require("express")
const CourseModel = require("../models/course.model")

const courseRouter = express.Router()

courseRouter.get("/courses",async(req,res)=>{
    try {
        const {category, difficulty, q, page = 1, limit = 10} = req.query

        const filter = {}
        if(category) filter.category = category
        if(difficulty) filter.difficulty = difficulty

        const getCourse = await CourseModel.find(filter)
            .skip((page-1)*limit)
            .limit(parseInt(limit))

        const totalCourse = await CourseModel.countDocuments(filter)    

        res.json({
            total:totalCourse,
            page,
            limit,
            getCourse
        })
    } catch (error) {
        res.send(error)
    }
})

courseRouter.post("/enroll",async(req,res)=>{
    const {title,category,difficulty,description} = req.body
    try {
        const addCourse = new CourseModel({
            title,
            category,
            difficulty,
            description
        })
        await addCourse.save()
        res.status(201).json({"message":"Successfully enrolled in the course."})
    } catch (error) {
        res.status(404).json({"error":"Error in post course", error})
    }
})

courseRouter.post("/cancel-enrollment",async(req,res)=>{
   try {
    const cancelEnroll = await CourseModel.find(req.body)
    res.json({"message":"Successfully canceled enrollment"})
   } catch (error) {
    res.json({"error":"error in canceling enrollment"})
   }
})

courseRouter.get("/my-courses",async(req,res)=>{
    const allCourse = await CourseModel.find()
    res.send(allCourse)
})

module.exports = courseRouter