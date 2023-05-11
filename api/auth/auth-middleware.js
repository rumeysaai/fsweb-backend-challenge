const { JWT_SECRET } = require("../../config/config");
const Users = require("../users/users-model");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

const restricted = (req,res,next) => {

    try {

        const authHeader = req.headers["authorization"];
        if(authHeader){
            jwt.verify(authHeader, JWT_SECRET, (err, decodedToken)=>{
                if(err){
                    res.status(401).json({message:"Geçersiz token!"})
                }
                else{
                    req.decodedToken = decodedToken
                    next();
                }
            })
        }
        else{
            res.status(400).json({message:"Token gereklidir!"});
        }
    } catch (error) {
        next(error)
    }

}
const payloadCheck = (req,res,next) => {

    try {

        const {Username, Password} = req.body;
        if(!Username || !Password ){
            res.status(400).json({message:"Username ve password gereklidir"})
        }
        else{
            next();
        }
        
    } catch (error) {
        next(error)
    }
}
const usernameCheck = async(req,res,next) => {

    try {

        const{Username} = req.body;
        const user = await Users.getUserByFilter({Username:Username})
        if(user){
            res.status(400).json({message:"Username alınmış"})
        }
        else{
            next()
        }
    } catch (error) {
        next()
    }
}
const emailCheck = async(req,res,next)=>{
    try {

        const{UserEmail} = req.body;
        const user = await Users.getUserByFilter({UserEmail:UserEmail});
        if(user){
            res.status(400).json({message:"Bu email ile kayıtlı bir hesap bulunmaktadır"})
        }
        else{
            next()
        }
        
    } catch (error) {
        next(error)
    }
}
const loginPasswordCheck = async (req,res,next) => {
    try {
        
        const {Username, Password} = req.body;
        const user = await Users.getUserByFilter({Username:Username});
        if(!user){
            res.status(400).json({message:"Kullanıcı bulunamadı"})
        }
        else{
            let isPasswordValid = bcryptjs.compareSync(Password, user.Password);
            if(!isPasswordValid){
                res.status(400).json({message:"Parola hatalı"})
            }
            else{
                next()
            }
        }
    } catch (error) {
        next(error)
    }
}
module.exports={
    restricted,
    payloadCheck,
    usernameCheck,
    emailCheck,
    loginPasswordCheck,
}