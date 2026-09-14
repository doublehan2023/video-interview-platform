import express from "express";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.use(express.json());
app.use(cors({origin: ENV.CLIENT_URL, credentials: true}));

const startServer = async () => {
     try{
          await connectDB();
          app.listen(ENV.PORT, () => {
               console.log(`Server is running on port ${ENV.PORT}`);
          });
     }catch(error){
          console.error("Failed to start server:", error.message);
          process.exit(1);
     }
};

startServer();
