//@ts-check
const mongoose = require("mongoose");
const models = require("../models");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

// Replace with your mongoLab URI
const MONGO_URI = "";
if (!MONGO_URI) {
  throw new Error("You must provide a MongoDB URI");
}

async function connect() {
  try {
    const db = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // Connect to the mongoDB instance and log a message
    // on success or failure
    console.log("Connected to MongoDB instance.");
    return db;
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
}

const store = new MongoStore({
  url: MONGO_URI,
  autoReconnect: true,
});

module.exports = { connect, store };
