import mongoose from "mongoose"
const monastrySchema=new mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique: true,
    },
    image:{
        type:[String],
    },
    panoramicImage:{
        type: String,
    },
    description:{
        type: String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    visitors:{
        type:String,
        required:true,
    },
    establishedYear:{
        type:Number,
        required:true,
    },
    contactInfo:{
        type:String,
    }
},{
    timestamps: true,
})
export const Monastry=mongoose.model("Monastry",monastrySchema);