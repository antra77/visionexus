import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER USER */
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;

    const salt = await bcrypt.genSalt(); // for password encryption
    const passwordHash = await bcrypt.hash(password, salt); //so that the password wont be exposed while we type it

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });

    const savedUser = await newUser.save(); //to saved the user
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGGING IN  */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //for searching if the email is already registered or not
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist" });
    // to find if the email and password entered are matched
    const isMatch = await bcrypt.compare(password, user.password);
    // or if it does not match
    if (!isMatch) return res.status(400).json("Password incorrect");

    //generate a jwt token

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

    // need to delete the password so that it doesnt get sent back to frontend
    delete user.password;
    res.status(200).json({ token, user });
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
