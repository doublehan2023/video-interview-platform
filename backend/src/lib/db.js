import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
     try{
          if(!ENV.DB_URI){
               throw new Error("DB_URI is not defined in environment variables");
          }
          const connection = await mongoose.connect(ENV.DB_URI)
          console.log(`MongoDB connected: ${connection.connection.host}`);
     }catch(error){
          console.error(`Error: ${error.message}`);
          process.exit(1);
     }
}