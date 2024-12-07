import dotenv from "dotenv";

dotenv.config();

export const MONGO_DB_URL: string = process.env.MONGO_DB_URL || "";
export const POSTGRES_DB_URL: string = process.env.POSTGRES_DB_URL || "";
export const REDIS_DB_URL: string = process.env.REDIS_DB_URL || "";
export const REDIS_DB_PASSWORD: string = process.env.REDIS_DB_PASSWORD || "";
export const JWT_SECRET: string = process.env.JWT_SECRET || "";
