const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const cookieParser = require("cookie-parser");

const app = express();

// Middlewares
app.use(cookieParser())
app.use(express.json());
app.use('/api', router);

const URL = "mongodb+srv://admin:20K26yzfpasq9seZ@cluster0.iudvl.mongodb.net/mern-auth?retryWrites=true&w=majority";

mongoose.connect(URL).then(() => {
    app.listen(5000);
    console.log("Database is connected");
}).catch(err => console.log(err));