const model = require("../models/quoteAndName");

module.exports.add = async (body) =>{
    try{
        return await model(body).save();
    } catch (err){
        return {success: false, message: err.message};
    }
};
module.exports.findByName = async (body) =>{
    try{
        return await model.findOne({
            "name": "Yoda",
        });
    } catch (err){
        return {success: false, message: err.message};
    }
};

module.exports.update = async (body) =>{
    try{
        const obj=await model.findOne({
            "name": "Yoda",
        });
        obj.name=body.name;
        obj.message=body.message;
        return await model(obj).save();
    } catch (err){
        return {success: false, message: err.message};
    }
};

module.exports.delete =async (body) =>{
    try{
        return await model.findByIdAndDelete(body);
    }
    catch(err){
        return {success: false, message: err.message}
    }
};