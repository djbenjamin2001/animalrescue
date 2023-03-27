require("dotenv").config()
const express = require("express")// <-- common js 
//import express from "express" <-- es 6import
const cors = require("cors")
const animals = require("./routes/animals.routes")

const app = express()


//import db-connection
require("./database")

app.use(cors())


app.use("/api/v1", animals)




app.listen(4000, () =>{
    console.log("listening for requests on port 4000")
})