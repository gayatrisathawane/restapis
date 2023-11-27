import Booking from "../models/Booking.model.js";

const postapibooking = async(req,res)=>{
    const { bus,passengerName,mobileNo,SeatNumber,to,from }=req.body

    const newBooking = new Booking({
        bus,passengerName,mobileNo,SeatNumber,to,from


    })


    try{
        const savedBooking= await  newBooking.save()

        return res.status(201).json({
            success:true,
            data:savedBooking,
            message:"successfully booked"
        })

    }catch(error){

        return res.json({

            success:false,
            data:null,
            message:(error.message)

        })


    }
   
}

const getapibooking= async(req,res)=>{

    const allpassengers = await Booking.find()

    res.status(200).json({
        success:true,
        data:allpassengers,
        message:"successfully fetch all passenger"
    })
}

export{postapibooking,getapibooking}