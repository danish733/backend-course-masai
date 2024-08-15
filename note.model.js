import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    status:{type:Boolean,required:true,default:false},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
},{
    versionKey:false,
    timestamps:true
})
const NoteModel = mongoose.model("Note", noteSchema)

export default NoteModel