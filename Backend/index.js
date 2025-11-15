import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

dotenv.config();

import bookRoutes from './route/book.route.js'
import userRoutes from './route/user.route.js'



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




app.use(express.json());
app.use('/books', bookRoutes);
app.use('/user',userRoutes);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
