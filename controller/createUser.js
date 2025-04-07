import { User } from "../models/userDetail.js"

export default async function createUser(req,res){
  const {UserName, Email,Password} = req.body
   const response = await User.create({
      UserName,
      Email,
      Password
    });

    if(response._id){
      res.redirect('/login')
    }
    else{
      res.redirect('/signup')
    }
}