import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`
    );
    // handeling error
  } catch (error) {
    console.log("MongoDb connection Failed", error);
    // this is a facility provided by node for instead of throw error
    process.exit(1);
  }
};

export default connectDB;
