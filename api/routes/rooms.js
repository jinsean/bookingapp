import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE Room
router.post("/:hotelid", verifyAdmin, createRoom);

//GET ALL
router.get("/", getRooms);

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

export default router;