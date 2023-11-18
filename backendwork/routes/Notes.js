const route=require("express").Router();
const controllers=require("../controllers/Notes")
const authcheck=require("../helpers/requiresign")

route.get("/getallnotes",authcheck,controllers.Getnotes)
route.post("/addnotes",authcheck,controllers.Addnotes)
route.put("/updatenotes/:id",authcheck,controllers.Updatenotes)
route.delete("/deletenotes/:id",authcheck,controllers.Deletenotes)

module.exports=route;