import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()
import Bus from './models/Bus.model.js'
import {postapibus,getapibus,deleteapibus} from './Controllers/Bus.controller.js'

const app = express()

app.use(express.json());

const PORT  = 5000


// connect  mongodb

const mongodb = async()=>{

    try{

        const connect = await mongoose.connect(process.env.MONGODB_URL)
    if(connect){
        console.log("mongo db connect")
    }

    }catch(error){

        console.log(error.message)

    }

    

}

mongodb()


//post

app.post('/api/v1/buses',postapibus)
app.get('/api/v1/buses',getapibus)
app.delete('/api/v1/buses/:_id',deleteapibus)




app.listen(PORT ,()=>{
    console.log(`server is running on port ${PORT}`)
})



// import express from 'express';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import Bus from './models/Bus.model.js';

// dotenv.config();

// const app = express();

// app.use(express.json());

// const PORT = 5000;

// // Connect to MongoDB
// const mongodb = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected successfully');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error.message);
//   }
// };

// mongodb();

// // POST API to add a new bus
// app.post('/api/buses', async (req, res) => {
 
//     const { busName, busNumber, totalSeat, availableSeat, bookedSeat } = req.body;

//     // Validate input (you might want to add more validation based on your requirements)

//     // if (!busName || !busNumber || !totalSeat || !availableSeat || !bookedSeat) {
//     //   return res.status(400).json({
//     //     success: false,
//     //     message: 'All fields are required.',
//     //   });
//     // }

//     // Create a new bus instance
//     const newBus = new Bus({
//       busName,
//       busNumber,
//       totalSeat,
//       availableSeat,
//       bookedSeat,
//     });

//     // Save the new bus to the database
//     const savedBus = await newBus.save();

//     return res.json({
//       success: true,
//       data: savedBus,
//       message: 'Bus added successfully',
//     });
  
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
