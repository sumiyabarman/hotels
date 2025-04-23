const express=require('express');
const router=express.Router();
const Person=require('./../models/person');
//POST route to add a person
router.post('/', async(req,res)=>{
    try{
      const data=req.body //assuming the request body contains the person data
      //create a new person using mongoose model
      const newPerson=new Person(data);
      // save the new person to the database
      const response = await newPerson.save();
      console.log("data saved");
      res.status(200).json(response);
  
    }catch(err){
      console.log(err);
      res.status(500).json({error:'Internal server Error'});
    }
  })
  router.get('/', async(req,res)=>{
    try{
      
      const data = await Person.find();
      console.log("data fetech");
      res.status(200).json(data);
  
    }catch(err){
      console.log(err);
      res.status(500).json({error:'Internal server Error'});
    }
  })
  router.get('/:worktype', async (req,res)=>{
    try{
      const worktype=req.params.worktype; //parameter(worktype) change hole URL change hobe
      if(worktype =='chef'|| worktype =='waiter'||worktype=='manager')
      {
        const response=await Person.find({work:worktype});
        console.log("response fetch");
        res.status(200).json(response);
      }
      else{
        res.status(404).json({error:'invalid work type'});
      }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server Error'});
    }
  })
  router.put('/:id', async(req,res)=>{
    try{
        const personId = req.params.id;  //Extract the id from the URL parameter
        const updatePersonData = req.body;  // updated data for the person
        const response = await Person.findByIdAndUpdate(personId, updatePersonData ,{
            new : true,  //return the updated document
            runValidators : true,   //run moongose validation 
        })
        if(!response){
            return res.status(404).json({error: 'person not found'});
        }
        console.log("data updated");
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server Error'});
    }
  })
  router.delete('/id',async(req,res)=>{
    try{
        const personId=req.params.id;
        const response = await Person.findByIdAndRemove(personId);
        if(!response){
            return res.status(404).json({error:'Person not found'});
        }
        console.log("data delete");
        res.status(200).json({message:'person deleted successfully'})
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server Error'});
    }
  })
  module.exports=router;