import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import foodRouter from "./Routes/foodRoutes.js";
import userRouter from "./Routes/userRoute.js";
import cartRouter from "./Routes/cartRoutes.js";

import "dotenv/config.js"

//app config
const app = express();
const port = 4000;
//middleware

app.use(express.json());
app.use(cors()); // it is used  to access backend into frontend

//db connection
connectDb();

//api endpoint
app.use("/api/food",foodRouter);  //we have any method get post etc always use "/api/food"
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/images",express.static("uploads")); //we can see all the images which is present inside uploads by using http://127.0.0.1:4000/images/1737448865439food_6.png
app.get("/",(req,res) => {
    res.send("API working");
});
app.listen(port,() => {
    console.log(`server starts at: http://127.0.0.1:${port}`);
})

