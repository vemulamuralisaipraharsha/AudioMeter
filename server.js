const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const homeRoute = require("./routes/homeRoute");
const inputRoute = require("./routes/inputRoute");
const testRoute = require("./routes/testRoute");
const reportsRoute = require("./routes/reportsRoute");
const flag_data = require("./globals");

dotenv.config();

const PORT = process.env.PORT;

mongoose.connect(process.env.DB_CONNECTION_STRING)
    .then((result) => {
        app.listen(PORT, () => {
            console.log(`[LOG] Connected and Listening on [PORT]: ${PORT}`);
        }); console.log("[LOG] Connected to DB")
    })
    .catch((err) => console.log(err));

const app = express();


app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/home', homeRoute);
app.use('/input', inputRoute);
app.use('/test', testRoute);
app.use('/reports', reportsRoute);
app.post("/quickTest" , (req,res)=>{let data = false;flag_data.setFlag(data);res.render("test");})



//404 Error Block
app.use((req, res) => {
    res.status(404).render("404");
});
