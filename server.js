// imports
const express = require("express") //importing express package
const app = express() // creates a express application
const dotenv = require("dotenv").config() //this allows me to use my .env values in this file
const mongoose = require("mongoose")
const methodOverride = require('method-override')
const morgan = require('morgan')
//import models
const User = require('./models/User')
const Review = require('./models/Review')
const Listing = require('./models/Listing')
const Category = require('./models/Category')




// Middleware
app.use(express.static('public')); //all static files are in the public folder
app.use(express.urlencoded({ extended: false })); // this will allow us to see the data being sent in the POST or PUT
app.use(methodOverride('_method'))
app.use(morgan('dev'))


async function conntectToDB(){ //connection to the database
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to Database")
    }
    catch(error){
        console.log("Error Occured",error)
    }
}


conntectToDB()



// Routes go here

async function  testRelationships(){
    // const newUser = await User.create({
    //     userName:'userA',
    //     password:'user123'
    // })
    // const newCategory = Category.create({
    //      categoryName: 'villa'
    // })
    // const newListing = await Listing.create({
    //     streetAddress:'Manama road123 block 3467' ,
    //         city: 'Manama',
    //         price: 100 ,
    //         size: 120,
    //         owner: User._id = '6ae32a7f97d3f27ff9d900b0',
    //         category: Category._id = '6ae32d21969d45528ccb7a4d'
    // })


    const retreiveListing = await Listing.find().populate('owner')
    console.log(retreiveListing)
}
testRelationships()


 
 
 
 




app.listen(3000,()=>{
    console.log("Listening on port " + 3000)
}) // Listen on port 3000
