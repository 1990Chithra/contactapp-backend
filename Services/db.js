//connection code for node and mongoDB
//1.import mongoose

const mongoose=require('mongoose')
//2.Connection string
mongoose.connect('mongodb://localhost:27017/Contacts')

const user=mongoose.model('user',{    
    id:String,
    firstname:String,
    lastname:String,
    city:String,
    street:String,
    number:String,
    email:String,
    phone:String,
})
module.exports={
    user
}
