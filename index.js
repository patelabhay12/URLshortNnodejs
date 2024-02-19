const express = require("express");
const urlRoute = require("./routes/url");
const { connect } = require("./connect");
const URL = require("./models/url");
const app = express();
const PORT = 3000;

connect("mongodb://localhost:27017/urlshort").then(() => {
    console.log("Mongodb Connected successfully...");
})

app.use(express.json());

app.use("/url", urlRoute);
app.use("/", urlRoute);


app.listen(PORT, () => {
    console.log("Server running sucessfully....");
})   
