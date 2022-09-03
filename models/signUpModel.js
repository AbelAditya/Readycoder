const mongoose=require('mongoose')

let signUpSchema=mongoose.Schema({


    name:{
        type:String,
        required:[true,'name should be provided']
    },
    email:{
        type:String,
        required:[true,'email should be provided']
    },
    phone_number:{
        type:String,
        required:[true,"phone number should be provided"]
    },
    password:{
        type:String,
        required:[true,"password should be provided"]
    }
})



let signUpModel=mongoose.model("userDetails",signUpSchema)

module.exports=signUpModel






