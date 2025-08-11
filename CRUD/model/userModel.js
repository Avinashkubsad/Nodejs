import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : { type:String , required : true},
    age:{ type:Number , required : true},
    phno:{ type:Number , required : true},
    email:{type:String, required :true}

})

export default mongoose.model("users",userSchema);



//note best practice is use now is  use import 

/***********   find which is better and why ***********/