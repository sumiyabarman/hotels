const mongoose =require('mongoose');
//define the person schema
const personschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,  //name mandatory for this file
    },
    age :{
        tyep:Number,
    },
    work:{
        type:String,
        enum:['chef','manager','waiter'],//ei 3 tar modheye je kono akta hote hobe
        required: true,
    },
    mobile:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    address:{
        type:String,
    },
    salary:{
        type:Number
    }
})
//create person model
const person=mongoose.model('person',personschema);
module.exports=person;