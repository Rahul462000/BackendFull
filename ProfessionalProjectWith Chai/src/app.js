import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// setting up the cors
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// this is for configuration and setting middleware
// if data is coming in json format then we have custom settings for it
app.use(express.json({ limit: "16kb" }));

// configuration for if data is coming from a particular URL
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// configuration for storing files pictures
app.use(express.static("public"));

app.use(cookieParser());

export { app };
