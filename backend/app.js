const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8074;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;
global.URL = URL;
 
mongoose.connect(URL, {
        useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopologyL:true,
        useFindAndModify:false
});

const connection = mongoose.connection;
connection.once("open",() => {
        console.log("Mongodb Connection Success!");
});

const example = require("./routers/example.js");
app.use("/example",example);

app.listen(PORT, () => {
        console.log(`Server is up and runnning on port number : ${PORT}`);
});