const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    // image:{
    //     type:String,
    //     required:true
    // },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
},{timestamps:true})




module.exports=mongoose.model("usermodal",userSchema);