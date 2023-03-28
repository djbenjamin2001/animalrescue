const express = require("express")
const router = express.Router()
const Animal = require("../models/animals.models")
const auth = require("../auth-middleware")
router.get("/animals", async function(request, response, next){
    try {
       let result =  await Animal.find();
       return response.status(200).json(result)
    } catch (error) {
       return next(error) 
    }
})

router.get("/animals/:id", async function(request,response,next){
    try {
        let result = await Animal.findById(request.params.id)
        return response.status(200).json(result)
    } catch (error) {
        return next(error)   
    }
})

router.post("/animals", auth, async function(request, response, next){
    try {
   let animal = await Animal.create(request.body)
   return response.status(201).json(animal)
    } catch (error) {
        return next(error)
    }
})

//update an animal by id 
router.patch("/animals/:id", auth, async function(request, response, next){
    try {
let updatedAnimal = await Animal.findOneAndUpdate(request.params.id , request.body, {new: true})   
     return response.status(200).json(updatedAnimal)
    } catch (error) {
    return next(error)    
    }
})

//delete an animal by id
router.delete("/animals/:id",  async function(request, response, next){
    try {
     await Animal.findByIdAndDelete(request.params.id)   
     return response.status(204).end()
    } catch (error) {
    return next(error)    
    }
})



module.exports = router;