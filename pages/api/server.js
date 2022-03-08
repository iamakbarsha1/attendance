// Third Party Module
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");

const PORT = 1000;
const dbUrl = `mongodb+srv://admin:admin@attendancems.uphej.mongodb.net/AttendanceMS?retryWrites=true&w=majority`;

// Middleware
app.use(morgan("Akbar Sha S"));
app.use(express.json());

// Router
const roomRouter = require("./router");
app.use("/signUp", roomRouter);

// MongoDB Connecting
mongoose.connect(
  dbUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("Database is Connected");
    } else {
      console.log("Database is D-I-S-connected");
    }
    // else console.log("Database is DISCONNECTED");
  }
);

// PORT Listening
app.listen(PORT, () => {
  console.log(`Server is Running in : ${PORT}`);
});
