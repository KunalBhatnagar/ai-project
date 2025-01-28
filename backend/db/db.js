import mongoose from "mongoose";
import 'dotenv/config';

function connect() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error("MONGODB_URI is not defined in the environment variables");
    process.exit(1);
  }

  mongoose.connect(uri)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error.message);
    });
};

export default connect;
