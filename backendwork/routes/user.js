const route=require("express").Router();
const controllers=require("../controllers/user")
const authcheck=require("../helpers/requiresign")


route.post("/signup",controllers.signupuser);
route.post("/login",controllers.Loginuser);
route.post("/get-user",authcheck,controllers.Getuser)


module.exports=route;
