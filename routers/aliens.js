const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const Alien = require('../models/alien');

router.get('/', async(request, response)=>{
   try{
    const aliens = await Alien.find();
    response.json(aliens);
   }
   catch(error){
    response.send('Error = ' + error);
   }
})

router.get('/:id', async(request, response)=>{
    try{
     const alien = await Alien.findById(request.params.id);
     response.json(alien);
    }
    catch(error){
     response.send('Error = ' + error);
    }
 })

router.post('/', async(request,response)=>{
    const alien = new Alien({
        name: request.body.name,
        tech: request.body.tech,
        sub: request.body.sub
    })

    try{
        const a1 = await alien.save();
        response.send(a1);

    }catch(error){
        response.send("Error = "+ error);
    }
})

router.patch('/:id', async(request, response)=>{
    try{
        const alien = await Alien.findById(request.params.id);
        alien.sub = request.body.sub;
        const a1 = await alien.save();
        response.json(a1); 

    }catch(error){
        response.send("Error = " + error);
    }
})

router.delete('/:id', async(request, response)=>{
    try{
        const alien = await Alien.findById(request.params.id);
        alien.sub = request.body.sub;
        const a2 = await alien.delete();
        response.json(a2);
    }catch(error){
        response.send("Error = ", +error);
    }
})

module.exports = router