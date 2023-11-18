const express=require("express");
const app=express();
const Userroute=require("./routes/user")
const Notesroute=require("./routes/Notes")
const cors=require("cors")
// data base connection 
require("./db/db")

// middleware
app.use(express.json());
app.use(cors())
// routes
app.use("/user/api/",Userroute)
app.use("/notes/api/",Notesroute)







// isten the app;
app.listen(80,()=>{
    console.log("server is started")
})
