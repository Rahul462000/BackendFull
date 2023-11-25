// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import express from "express";
import connectDB from "./db/index.js";
const app = express();

// configure the dotenv variable
dotenv.config({
  path: "./env",
});

// always wrap the db talking in try and catch
// and always use async and await method for taking result from db

// here i have immediately executed the funciton
// putting semicoloun before ifee

// new connection method for db called here
connectDB();
app
  .on("error", (error) => {
    console.log("ERROR", err);
    throw error;
  })
  .then(() => {
    app.listen(process.env.PORT || 8000);
    console.log(`SErver is listening on ${process.env.PORT}`);
  })
  .cath((err) => {
    console.log("MONGO DB CONNECTION FAILED !!!", err);
  });

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
