import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel, countByCity, countByType } from "../controllers/hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js"


const router = express.Router();  

//Create  
router.post("/", verifyAdmin, createHotel);

//Update  
router.put("/:id", verifyAdmin, updateHotel);

//Delete
router.delete("/:id", verifyAdmin, deleteHotel);

//Get by ID
router.get("/find/:id", getHotel);

//Get All
router.get("/", getHotels);

//Get Hotel countByCity
router.get("/countByCity", countByCity);

//Property Type
router.get("/countByType", countByType);


export default router;
