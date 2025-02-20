import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  image: String, // URL to car image
});

export default mongoose.model("Car", carSchema);
