import mongoose from "mongoose"
const chatBotSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    tibetan_name:{
        type: String,
        required:true,
    },
    sect:{
        type:String,
        required:true,
    },
    district:{
        type:String,
        required:true,
    },
    founded:{
        type:Number,
        required:true,
    },
    altitude:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    history:{
        type:String,
        required:true,
    },
    festivals:{
        type:String,
        required:true,
    },
    significance:{
        type:String,
        required:true,
    },
    keywords:{
        type:[String],
        required:true,
    }
},{
    timestamps: true,
})
export const ChatBot=mongoose.model("ChatBot",chatBotSchema)