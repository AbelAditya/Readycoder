const mongoose=require('mongoose')

let classSchema=mongoose.Schema({


    name:{
        type:String,
        required:[true,'name should be provided']
    },
    email:{
        type:String,
        required:[true,'email should be provided']
    },
    _class:{
        type:String,
        required:[true,"class should be provided"]
    },
    phone_number:{
        type:String,
        required:[true,"phone number should be provided"]
    },
    state:{
        type:String,
        required:[true,"State should be provided"]
    },
    school:{
        type:String,
        required:[true,"School should be provided"]
    }
})



let classDetailsModel=mongoose.model("classdetails",classSchema)

module.exports=classDetailsModel
