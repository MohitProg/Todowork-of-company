const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://mohitjj:newsapp@development.hs7acix.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("database is connected  ");
}).catch((error)=>{
    console.log(error);
})