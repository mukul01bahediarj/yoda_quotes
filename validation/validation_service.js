module.exports.validationFunction =  (body) => {
    const errors = [];
    if(!body.username){
        errors.push("name missing");
    }
    if(!body.message){
        errors.push("message empty");
    }
    if(errors.length ===0){
        return {success : true}
    }
    return errors
};
module.exports.validateFunction =  (body) => {
    const errors = [];
    if(!body.username){
        errors.push("username missing");
    }
    if(!body.password){
        errors.push("password empty");
    }
    if(errors.length ===0){
        return {success : true}
    }
    return errors
};

module.exports.validateFunctionOpenApi =  (body) => {
    const errors = [];
    if(!body.state){
        errors.push("name missing");
    }
    if(errors.length ===0){
        return {success : true}
    }
    return errors
};
// read about register, login, token and authentification:
// https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/