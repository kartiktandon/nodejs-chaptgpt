import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: true
    },

    Email: {
        type: String,
        required: true,
       
    },

    Password: {
        type: String,
        required: true
    }
    
    
});

const User = mongoose.model('userDetail', userSchema)

export {User}