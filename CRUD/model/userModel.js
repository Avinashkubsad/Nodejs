import mongoose from "mongoose";

const userSchema = new mongoose.schema({
    name : { type:String , required : true},
    age:{ type:Boolean , required : true},
    phno:{ type:Number , required : true},
    email:{type:String, reuired :true}

})

export default mongoose.Model("users",userSchema);



//note best practice is use now is  use import 

/***********   find which is better and why ***********/