import mongoose from "mongoose";
const schema=new mongoose.Schema({
    email:{
        type:String,
    },
    contact:{
        type:String,
    },
    query:{
        type:String,
    },
    
},{timestamps:true})
const userquery=mongoose.model("query",schema);
export default userquery;