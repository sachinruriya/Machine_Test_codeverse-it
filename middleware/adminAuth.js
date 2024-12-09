async function adminAuth(req,res,next){
      const { role } = req.body; 
     if(role.includes("admin")){
        next()
     }
}
module.exports = adminAuth;
