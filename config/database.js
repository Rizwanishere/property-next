import mongoose, { mongo } from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  //If the database is already connected, Dont connect again
  if (connected) {
    console.log("Database is already connected");
    return;
  }

  //Connect to DB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("Database is connected");
  } catch (err) {
    console.log(err);
  }
};
export default connectDB;
