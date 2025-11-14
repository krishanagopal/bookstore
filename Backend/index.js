import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
const app = express()

dotenv.config();

const PORT= process.env.PORT || 4000
const URL= process.env.MONGODB_URL

try {
   mongoose.connect(URL, {useNewUrlParser: true}).then(() => {
    console.log("Database connected successfully");
   } ).catch((error) => {
    console.log("Error while connecting with the database ", error);
   });
} catch (error) {
    console.log("Error occured",error)
}

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
