import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rooms: {
    type: [String],
  },
});

export default mongoose.model("Hotel", HotelSchema)