import foodModel from "../models/foodModel.js";
import fs from 'fs'


// add food item

const addFood = async(req,res ) =>{
    let image_filename = `${req.file.filename}`
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category
    })
    try {
        await food.save();
        res.json({
            success:true,
            message:"food added"
        })
    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message: error.message
        })
        
    }

}

// All food List 

const listFood =  async (rq,res) =>{
    try {
        const food = await foodModel.find({});
        res.json({
            success:true,
            data: food
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message: "Error fetching food data"
        })
        
        
    }

}

// remove food item

const removeFood = async(req,res) =>{
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{});// for deleting the image from the folder

        await foodModel.findByIdAndDelete(req.body.id)
        res.json({
            success:true,
            message:"food removed successfully"
        })
        
    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message:"Error Removing File"
        })
    }

}

export {
    addFood,
     listFood,
    removeFood
}
