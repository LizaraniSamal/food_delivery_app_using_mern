import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

//image storage engine or image upload
const storage = multer.diskStorage({
    destination:"uploads", //use this uploads folder and all the image are stored in this folder
    filename: (req,file,cb) => {
        return cb(null,`${Date.now()}${file.originalname}`)  //here we set our custom file name so that conflict not occurred
    }
})

const upload = multer({storage:storage});  //here upload is a middleware

foodRouter.post("/add",upload.single("image"),addFood);  // here we upload a single image file and addFood is a function we pass it
foodRouter.get("/list",listFood);
foodRouter.delete("/remove",removeFood);
export default foodRouter;



//multer is mainly used for upload file
