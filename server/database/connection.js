import mongoose from "mongoose";

export default async() => {
  return mongoose.connect(process.env.MONGO_URL,{
    /*useNewUrlParser: true,
    useUnifiedTopology:true*/
  }).then("Database connection established").catch("Database connection failed");
}
