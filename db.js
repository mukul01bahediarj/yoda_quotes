const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/darkVadar",{useNewUrlParser: true},
    (err) => {
        if(!err){
            console.log('Connection Established Successfully with MongoDB')
        }
        else{
            console.log('Failed to Establish Connection with MongoDB with error:' + err)
        }
    }
    );

module.exports = mongoose;