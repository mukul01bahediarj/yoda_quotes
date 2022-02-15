const repo = require("../repository/repo");
const auth = require("../authentication/auth_controller");
const openApiService = require("../services/openApiService");
module.exports.createUser = async (body) =>{
    return await auth.create(body);
};

module.exports.loginUser = async (body) =>{
    return await auth.login(body);
};

module.exports.createQuote = async (body) =>{
    return await repo.add(body);
};

module.exports.updateQuote = async (body) =>{
    const result= await repo.findByName(body);
    if(!result){
        throw new Error("Yoda not found")
    }
    return await repo.update(body)
};


module.exports.callOpenApi = async (body) =>{
    return await openApiService.callApi(body)
};

module.exports.deleteQuote = async (body) =>{
    const result= await repo.findById(body);
    if(!result){
        throw new Error("Invalid ID")
    }
    return await repo.delete(body)
};