const mongoose=require('mongoose')

let consSchema=mongoose.Schema({


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
    parent_phone_number:{
        type:String,
        required:[true,"Parent phone number should be provided"]
    },
    school:{
        type:String,
        required:[true,"School should be provided"]
    }
})



let counsellingModel=mongoose.model("counsellingdetails",consSchema)

module.exports=counsellingModel
