import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./api/routes/auth.js";
import hotelsRoute from "./api/routes/hotels.js"; //Add ".js" if import from express server


dotenv.config();
const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

//middlewares
app.use(express.json());

app.use("/auth", authRoute);
app.use("/api/hotels", hotelsRoute);



app.listen(8080, () => {
  connect()
  console.log("Connected to backend.")
  });


