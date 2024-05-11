import express from "express";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from "./routes/AllRoute.js";
import cors from 'cors';
const app = express();
app.use(cors())
app.use(bodyParser.json());
dotenv.config()
const PORT = process.env.PORT || 5000;
const MongoUrl = process.env.MONGO_URL;
// console.log(MongoUrl, PORT);

mongoose.connect(MongoUrl).then(() => {
  console.log(`Connected mongoDB successfully!`);
  app.listen(PORT, () => {
    console.log(`Crud Server Is Running On Port:http://localhost:${PORT}`);
  })

  app.get('/', (req, res) => {
    res.send('<h1 align="center">This Is Simple Crud Application:)</h1>')
  })




}).catch((err) => {
  console.log(`Not Connected MongoDB:${err}`);
});


// app.use("/api/user",route)
app.use("/api",router )

