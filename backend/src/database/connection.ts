import mongoose from "mongoose";
import { DataSource } from "typeorm";
import {
  MONGO_DB_URL,
  POSTGRES_DB_URL,
  REDIS_DB_PASSWORD,
  REDIS_DB_URL,
} from "../config/config";
import { Employee } from "../models/employee-model";
import { Order } from "../models/order-model";
import { User } from "../models/user-model";
import { Address } from "../models/address-model";
import { createClient, RedisClientType } from "@redis/client";

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
  entities: [Employee, Order, User, Address],
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

export const redisClient: RedisClientType = createClient({
  password: REDIS_DB_PASSWORD,
  socket: {
    host: REDIS_DB_URL,
    port: 15986,
  },
});

async function createRedisConnection(): Promise<void> {
  try {
    redisClient.on("ready", () => console.log("Connected to Redis."));
    await redisClient.connect();
  } catch (error) {
    console.error("Redis connection error:", error);
    throw new Error("Redis connection failed");
  }
}

async function initializeDatabases(): Promise<void> {
  try {
    await createMongoConnection();
    await createPostgresConnection();
    await createRedisConnection();
  } catch (error) {
    console.error("Database initialization failed:", error);
  }
}

initializeDatabases();
