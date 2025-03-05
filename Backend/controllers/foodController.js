import { log } from "console";
import foodModel from "../models/foodModel.js";
import fs from "fs";


//add food item

export const addFood = async(req,res) => {
    let image_filename = `${req.file.filename}`   //this line reads the upload image name
    const food = new foodModel({
        name:req.body.name,
        description: req.body.description,
        price : req.body.price,
        category: req.body.category,
        image: image_filename,
    });
    try{
        await food.save();
        res.status(200).json({success:true,message:"food added"});
    }catch(err){
        console.log(err);
        res.json({success:true,message:"Error"});
    }
}

//display all the food item present in database

export const listFood = async (req,res) => {
    try{
    const food = await foodModel.find({});
    res.json({success:true,data:food})
    }catch(err){
        console.log(err);
        res.json({success:false,message:err});
    }
}

//delete food item

export const removeFood = async (req,res) => {
    try{
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`,() => {});
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({success:true, message: "food removed"})
    }catch(err){
        console.log(err);
        res.json({success:true, message: err})    
    }
}