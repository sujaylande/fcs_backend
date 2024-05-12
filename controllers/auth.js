import {User} from '../models/auth.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
export const Auth = async (req, res) => {
    const { email, password } = req.body;
  
    let user = await User.findOne({ email });
  
    if (!user) return res.status(400).json({"message": "User does not exist!"});
  
    const isMatch = await bcrypt.compare(password, user.password);
  
    if (!isMatch) return res.status(400).json({"message": "Invalid Username or password"});
  
    const token = jwt.sign({ _id: user._id }, 'secret');
  
    res.cookie('token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + 60 * 1000*3600*24) // 60 seconds in milliseconds
    });
    return res.status(200).json({"email": email, "token": token});
  }
  