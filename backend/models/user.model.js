import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profilePic: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/8847/8847419.png",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
