//user authentication

import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;  // 1️⃣ Extract email & password from request body

  try {
    const user = await userModel.findOne({ email });  // 2️⃣ Find user in database by email
    
    if (!user) {  // 3️⃣ If user is not found, return an error response
      return res.json({ success: false, message: "User doesn't exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);  // 4️⃣ Compare provided password with hashed password in DB
    
    if (!isMatch) {  // 5️⃣ If passwords don't match, return an error response
      return res.json({ success: false, message: "Invalid Credentials" });
    }

    const token = createToken(user._id);  // 6️⃣ Generate JWT token for authentication

    res.json({ success: true, token });  // 7️⃣ Send token in response if login is successful
  } catch (err) {  // 8️⃣ Handle any unexpected errors
    console.log(err);
    res.json({ success: false, message: "Error" });
  }
};


 //create token
 const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};


//register user

const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    //checking user is exist or not
    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.json({ success: false, message: "User already exists" });
    }

    //validating email format and strong possword
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "please enter valid email" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "please enter strong password",
      });
    }

    //create an account

    //hasing user password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } 
  catch (err) {
    console.log(err);
    res.json({success:false,message:"Error"})
    
  }
};

export { loginUser, registerUser };
