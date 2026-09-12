//const express = require("express");
import express from "express";
import { ENV } from "./lib/env.js";


const app = express();
console.log("ENV.PORT:", ENV.PORT);
console.log("ENV.DB_URI:", ENV.DB_URI);

app.get("/", (req, res) => {
     res.status(200).send("Hello World!");
});

app.listen(ENV.PORT, () => {
     console.log(`Server is running on port ${ENV.PORT}`);
})