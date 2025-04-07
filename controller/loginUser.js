import { User } from "../models/userDetail.js"

export default async function fetchUser(req,res){
  const {UserName,Password} = req.body
   const response = await User.findOne({
     UserName,
      Password
    });
    if(!response){
        res.redirect('/signup')
    }
    else{
        res.redirect('/')
    }
}