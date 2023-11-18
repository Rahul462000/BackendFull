// best practise to write the file name
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  // here is the data for the model
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
  },
  { timestamps: true } // at every schema formation timestamps are to be defined
);

// this is how schema is exported in mongoose
export const User = mongoose.model("User", userSchema);
