const express = require("express")
const router = express.Router()
const Animal = require("../models/animals.models")

router.get("/animals", async function(request, response, next){
    try {
       let result =  await Animal.find()
       return response.status(200).json(result)
    } catch (error) {
       return next(error) 
    }
})

module.exports = router;