import mongoose from "mongoose"
const archiveSchema=new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    monastery:{
        type: String,
    },
    type:{
        type: String,
    },
    description:{
        type: String,
        required:true,
    },
    era:{
        type:String,
    },
    image:{
        type:[String],
        required:true,
    }
},{
    timestamps: true,
})
export const Archives=mongoose.model("Archives",archiveSchema);
