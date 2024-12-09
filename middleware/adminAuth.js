async function adminAuth(req,res,next){
      const { role } = req.body; 
     if(role.contain("admin")){
        next()
     }
}
module.exports = adminAuth;
