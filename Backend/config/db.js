import mongoose from "mongoose";
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://abis:abisraza@cluster0.8cfgauy.mongodb.net/food-del').then(() => console.log('DB CONNECTED'))
}