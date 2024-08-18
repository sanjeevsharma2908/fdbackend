import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'




//app config
const app = express()
const port = 4000


// middle ware
app.use(express.json())
app.use(cors()) // we can access backend from any frontend

//db connection 
connectDB();


//API endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)



app.get("/", (req,res) =>{
    res.send("Hello World!")
})



app.listen(port,() =>{
    console.log(`Server is running on port http//localhost${port}`)  // server is listening on port 4000
})