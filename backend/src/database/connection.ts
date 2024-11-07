import mongoose from "mongoose";
import { DataSource } from "typeorm";
import { MONGO_DB_URL, POSTGRES_DB_URL } from "../config/config";
import { Employee } from "../models/employee-model";

async function createMongoConnection(): Promise<void> {
  try {
    const response = await mongoose.connect(MONGO_DB_URL);
    console.log("Connected to MongoDB:", response.connection.name);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("MongoDB connection failed");
  }
}

export const postgresDataSource = new DataSource({
  type: "postgres",
  url: POSTGRES_DB_URL,
  synchronize: true,
  logging: false,
  entities: [Employee],
});

async function createPostgresConnection(): Promise<void> {
  try {
    await postgresDataSource.initialize();
    console.log("Connected to PostgreSQL:", postgresDataSource.isInitialized);
  } catch (error) {
    console.error("PostgreSQL connection error:", error);
    throw new Error("PostgreSQL connection failed");
  }
}

async function initializeDatabases(): Promise<void> {
  try {
    await createMongoConnection();
    await createPostgresConnection();
  } catch (error) {
    console.error("Database initialization failed:", error);
  }
}

initializeDatabases();
