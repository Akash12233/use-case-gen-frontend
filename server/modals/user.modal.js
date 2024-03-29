import mongoose from "mongoose";

const user= new mongoose.Schema({
    user: {
        type : String,
        required: true,
        default: ""
    },
    name_org:{
        type : String,
        required: true,
        default: ""
    },
    name_role_timestamp: {
        type: String,
        required: true,
        default: ""
    },
    agree:{
        type: Boolean,
        required: true,
        default: false
    }
});

const User= mongoose.model('users', user);
export default User