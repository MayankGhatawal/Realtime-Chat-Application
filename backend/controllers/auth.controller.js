import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cloudinary from "../config/cloudinary.js";

export const signup = async (req, res) => {
  try {
    const { email, fullName, password, profilePic } = req.body;
    if (!fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide all fields",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password should be at least 6 characters long",
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      fullName,
      email,
      password: hashedPassword,
      profilePic,
    });
    return res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide all fields",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exist",
      });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json({
        success: true,
        message: `Welcome, ${user.fullName}`,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (_, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { profilePic } = req.body;
    const userId = req.user._id;
    if (!profilePic) {
      return res.status(400).json({
        message: "Profile pic is required",
      });
    }
    const uploadResponse = await cloudinary.uploader.upload(profilePic);
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profilePic: uploadResponse.secure_url },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Profile pic updated successfully",
      updatedUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const checkAuth = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "User authenticated successfully",
      user: req.user,
    })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};