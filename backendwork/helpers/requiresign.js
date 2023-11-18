const jwt=require("jsonwebtoken");
const authcheck=(req,res,next)=>{
    const token=req.header("auth-token");
   

    try {
        if(!token){
            res.send({success:false,msg:"token is not found"})
        }

        const decode=jwt.verify(token,"thisismysocialmediapp");
        req.newuser=decode;
        next()
    } catch (error) {
        console.log(error);
        res.send({success:false,msg:"token is not found"})
    }

}
module.exports=authcheck;