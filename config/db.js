import mongoose from "mongoose"
export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://sanjeevsharma:Error_408@cluster0.h6z29.mongodb.net/food-del').then(()=>{
        console.log('DB Connected')
    })
}