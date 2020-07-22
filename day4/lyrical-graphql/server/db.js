//@ts-check
const mongoose = require("mongoose");

// Replace with your Mongodb URI
const MONGO_URI =
  "mongodb+srv://dbUser:0JB2dLYVWyUFekYY@cluster0.va4e7.mongodb.net/lyricaldb?retryWrites=true&w=majority";
if (!MONGO_URI) {
  throw new Error("You must provide a MongoDB URI");
}

function connect() {
  mongoose.connect(MONGO_URI, { useNewUrlParser: true });
  const db = mongoose.connection;
  db.once("open", () => console.log("Connected to MongoDB instance."));
  db.on("error", (error) => console.log("Error connecting to MongoDB:", error));

  return db;
}

module.exports = { connect };
