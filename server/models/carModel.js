import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  image: String,
});

export default mongoose.model("Car", carSchema);
