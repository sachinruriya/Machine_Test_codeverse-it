async function adminAuth(req,res){
     const role = req.body
     if(role.contain("admin")){
        next()
     }
}
module.exports = adminAuth;