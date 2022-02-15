const userDetail = require("../models/userDetails");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
let sessions = require("express-session");

module.exports.create = async (body) =>{
    try{
        const oldUser = await userDetail.findOne({username: body.username,});
        if(oldUser){
            // return res.status(404).status.send("user already exist");
            return {success: false, message: "user already exist"};
        }
        const encryptedPassword = await bcrypt.hash(body.password, 10);
        const Token = jwt.sign(
            { user_id: body.username},
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );
        const user = await userDetail.create({
            username : body.username,
            password: encryptedPassword,
            token: Token,
        });

        // user.token = token;
        // res.status(201).json(user);
        return user;
    }catch (err){
        return {success: false, message: err.message};
    }
};

module.exports.login = async (body) =>{
    try{
        const { username, password } = body;
        if (!(username && password)) {
            // res.status(400).send("All input is required");
            return {success: false, message: "All inputs are required"};
        }
        const user = await userDetail.findOne({ username: body.username, });

        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
                { user_id: user.username },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );
            user.token = token;

            // res.status(200).json(user);
            return user;
        }
        // res.status(400).send("Invalid Credentials");
        return {success: false, message: err.message};
    } catch (err){
        return {success: false, message: err.message};
    }
};
