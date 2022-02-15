const validation = require("../validation/validation_service")
const quote_service =  require("../services/controllerImplementation")

module.exports.register = async (body) =>{
    const check = validation.validateFunction(body);
    if(!check.success){
        throw new Error(check);
    }
    return await quote_service.createUser(body);
};

module.exports.login = async (body) =>{
    const check = validation.validateFunction(body);
    if(!check.success){
        throw new Error(check);
    }
    return await quote_service.loginUser(body);
};

module.exports.add_quote = async (body) =>{
    const check = validation.validationFunction(body);
    if(!check.success){
        throw new Error(check);
    }
    return await quote_service.createQuote(body);
};

module.exports.callOpenApi = async (body) =>{
    const check = validation.validateFunctionOpenApi(body);
    if(!check.success){
        throw new Error(check);
    }
    return await quote_service.callOpenApi(body);
};

module.exports.update_quote = async (body) =>{
    const check = validation.validationFunction(body);
    if(!check.success){
        throw new Error(check);
    }
    return await quote_service.updateQuote(body);
};

module.exports.delete_quote = async (body) =>{
    const check = validation.validationFunction(body);
    if(!check.success){
        throw new Error(check);
    }
    return await quote_service.deleteQuote(body);
};