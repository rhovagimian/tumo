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

function connect() {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  // Connect to the mongoDB instance and log a message
  // on success or failure
  db.once("open", () => console.log("Connected to MongoDB instance."));
  db.on("error", (error) => console.log("Error connecting to MongoDB:", error));

  return db;
}

const store = new MongoStore({
  url: MONGO_URI,
  autoReconnect: true,
});

module.exports = { connect, store };
