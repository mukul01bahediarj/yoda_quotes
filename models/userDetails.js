let mongoose= require("mongoose");

let schema3=new mongoose.Schema({
        username:{
            type: String,
            unique: true,
            required:true,
        },
        password:{type: String,},
        token:{type: String,},
    },
);
schema3.set("toJSON",{
    virtual: true,
});
module.exports= mongoose.model("userDetails",schema3,"userDetails");