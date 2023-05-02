const users   =require("../models/user.js");
const bcrypt = require('bcrypt');


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
     try {
    const { name, email, password, DOB} = req.body;
    
    // Check if user with given email already exists
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res.status(404).send("User validation failed: email: Email already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new users({ name, email, password: hashedPassword , DOB});
    await user.save();

    // Return _id of the registered user
    res.status(200).send(user._id);
  } catch (error) {
    if (error.name === "MongoError" && error.code === 11000) {
      res
        .status(404)
        .send("User validation failed: email: Email already exists");
    } else {
      res
        .status(404)
        .send("User validation failed: email: Email already exists");
    }
  }

}

module.exports = { registerUser };