import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";
const app = express();

// always wrap the db talking in try and catch
// and always use async and await method for taking result from db

// here i have immediately executed the funciton
// putting semicoloun before ifee

/*  first approach
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    // this is a listen method in exress
    app.on("error", (error) => {
      console.log("ERROR", err);
      throw error;
    });
    // this is the connection of express application
    app.listen(process.env.PORT, () => {
      console.log(`app is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR", error);
    throw error;
  }
})();*/
