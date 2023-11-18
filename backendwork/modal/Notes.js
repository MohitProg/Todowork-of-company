const mongoose=require("mongoose")

const NotesSchema=new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"usermodal"
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
  
    date:{
        type:Date,
        default:Date.now
    }
},{timestamps:true});




module.exports=mongoose.model("Notes",NotesSchema)