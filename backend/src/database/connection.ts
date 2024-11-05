import mongoose from "mongoose";
import { DB_URL } from "../config/config";

async function createConnection(): Promise<void> {
  try {
    const response = await mongoose.connect(DB_URL);
    console.log("Connected to mongodb", response);
  } catch (error) {
    console.error(error);
  }
}

createConnection();
