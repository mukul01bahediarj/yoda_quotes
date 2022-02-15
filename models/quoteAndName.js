let mongoose= require("mongoose");

let schema=new mongoose.Schema({
    username:{type: String,},
    message:{type: String,},
    },
);
schema.set("toJSON",{
    virtuals: true,
});
module.exports= mongoose.model("server_models",schema,"server_models");