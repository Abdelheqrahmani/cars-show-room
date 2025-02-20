import { get } from "mongoose";
import Car from "../models/carModel.js";

export const createCar = async (req, res) => {
  try {
    const newCar = new Car(req.body);
    const { name, brand, price, image } = newCar;

    const savedData = await newCar.save();
    res
      .status(200)
      .json({ message: "Car added successfully", data: savedData });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json({ data: cars });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getCarByName = async (req, res) => {
  try {
    const { name } = req.params;
    const car = await Car.findOne({ name });

    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.status(200).json(car);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
