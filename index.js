import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()
import {postapibus,getapibus,deleteapibus,putapibus,patchapibus} from './Controllers/Bus.controller.js'
import { postapibooking,getapibooking } from './Controllers/Booking.controller.js'
import Booking from './models/Booking.model.js'

const app = express()

app.use(express.json());

const PORT  = 5000


// connect  mongodb

const mongodb = async()=>{

    try{

        const connect = await mongoose.connect(process.env.MONGODB_URL)
    if(connect){
        console.log("mongo db connect")
    }}catch(error){

        console.log(error.message)
    }
}
//bus model  api s
app.post('/api/v1/buses',postapibus)
app.get('/api/v1/buses',getapibus)
app.delete('/api/v1/buses/:_id',deleteapibus)
app.put('/api/v1/buses/:_id',putapibus)
app.patch('/api/v1/buses/:_id',patchapibus)

//post api for Booking
app.post('/api/v1/bookings',postapibooking)
app.get('/api/v1/bookings',getapibooking)
app





app.listen(PORT ,()=>{
    console.log(`server is running on port ${PORT}`)
    mongodb()
})



