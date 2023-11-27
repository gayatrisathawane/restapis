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

const putapibus = async(req,res)=>{

    const { _id } = req.params

    const { busName, busNumber, totalSeat, availableSeat, bookedSeat}= req.body;

    await Bus.updateOne({_id:_id} , {$set:{ busName, busNumber, totalSeat, availableSeat, bookedSeat}})

     const updatedBus= await Bus.findById( _id );

  return res.status(200).json({
    data:updatedBus,
    success:true,
    message:" bus details updated"
  })
}

const patchapibus = async(req,res)=>{

    const { _id }= req.params

    const { bookedSeat } =req.body;

    await Bus.updateOne({_id:_id},{$set:{bookedSeat:bookedSeat}})

  res.status(200).json({
    status:true,
    message:"update"
  })



}



//pust

export {postapibus,getapibus,deleteapibus,putapibus,patchapibus}