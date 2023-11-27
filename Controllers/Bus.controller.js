import Bus from "../models/Bus.model.js";

const postapibus= async(req,res)=>{
    try{

    const { busName, busNumber, totalSeat, availableSeat, bookedSeat }= req.body;

    const newBus = new Bus({

        busName, busNumber, totalSeat, availableSeat, bookedSeat

    })
        const savedBus = await newBus.save()

        return res.status(201).json({
             success:true,
             data:savedBus,
             message: "Bus added successfully"
         })

    }catch(error){
        return res.json({
            success:false,
            message: (error.message)
        })

    }
    }

const getapibus = async(req,res)=>{


    const allBuses = await Bus.find()

    res.status(200).json({

        status:true,
        data:allBuses,
        message:"fetch all buses"
    

    })
}

const deleteapibus =async(req,res)=>{

    const { _id }= req.params

    await Bus.deleteOne({_id:_id})

    res.status(200).json({
        status:true,
        message:"bus deleted successfully",
        data:null
    })

    

}

export {postapibus,getapibus,deleteapibus}