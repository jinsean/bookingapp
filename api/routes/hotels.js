import express from "express";
import Hotel from "../models/Hotel.js"
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";

const router = express.Router();  

//Post  
router.post("/", createHotel);

//Update  
router.put("/:id", updateHotel);

//Delete
router.delete("/:id", deleteHotel);

//Get by ID
router.get("/:id", getHotel);

//Get All
router.get("/", getHotels);

export default router;
