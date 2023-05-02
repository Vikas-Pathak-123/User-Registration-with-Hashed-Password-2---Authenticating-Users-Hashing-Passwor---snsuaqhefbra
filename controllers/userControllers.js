const users   =require("../models/user.js");


/*
Post request json file structure


    obj =  {
        "name":name,
        "email":email,
        "password": password,
        "DOB": DOB
    }

 */

//You need to complete the route of user register
//you need to register the user and return the id assign to the user.
//the password you save in database should be hashed using bcrypt libary.
//you will get error if user mail allready exist in that case you need to return 404 status with err message that you get.
//to look the user schema look ../models/user.js


const registerUser =async (req, res) => {

    //write your code here

}

module.exports = { registerUser };