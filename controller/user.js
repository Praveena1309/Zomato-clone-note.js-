const User = require("../model/user");

exports.postuser=(req,res)=>{
    const{ email, password, name}=req.body;
    const Userobj = new User({
        email, 
        password, 
        name
    })
    Userobj.save()
    .then(response =>{
        res.status(200).json({
            message:"user data saved sucessfully",
            signup : response})
        })
    .catch(err => {
            res.status(500).json({ error:err })
        })
}
// // below code for login

exports.postlogin=(req,res)=>{
    const{email, password}=req.body;
    User.find({
        email, 
        password
    })
    .then(response=>{
        if (response.length > 0){
            res.status(200).json({
                message:"user details are valid",
                isAuthenticated: true,
                login: response
            })
        }else{
            res.status(500).json({
                message:"user details not valid",
                isAuthenticated: false,
                login: response
            })
        }
    })
    .catch(err => {
        res.status(500).json({ error:err })
    }) 
}