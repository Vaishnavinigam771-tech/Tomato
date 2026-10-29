import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://harshit10241024_db_user:2S1IXqqu2BQ39abC@cluster0.jwsuc34.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}