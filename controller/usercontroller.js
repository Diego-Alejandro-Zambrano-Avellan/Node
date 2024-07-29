import { UserModel } from "../models/usermodel.js";

export const getUsers = async (req, res)=>{
    try {
        const users = await UserModel.findAll();
        if(users){
            res.render('index',{users:users});
        }else{
            res.render('index',{message:"No existen usuarios"});
        }
    } catch (error) {
        res.render('index',{error:error.message});
    }
 }