import mongoose from "mongoose";

export async function Database(){
    mongoose.connect("mongodb+srv://Bharani_Rayudu:Bharani@cluster0.bsh0jfz.mongodb.net/NextBlog?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("database connected");
    })
    .catch(()=>{
        console.log("database can't connected")
    })
}