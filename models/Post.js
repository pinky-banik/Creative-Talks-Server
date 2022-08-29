const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required :true,
        unique:true,
    },
    desc:{
        type:String,
        required  :true,
        unique:true,
    },
    photo:{
        type : String,
        required :false,
    },
    username : {
        type : String,
        required  :true,
    },
    catagories : {
        type:Array,
        required:false,
    }

},
   {timesStamps :true}
)

module.exports = mongoose.model("Post",PostSchema);