//1.import express
const express=require('express')
//2.import cors
const cors=require('cors')

const logic=require('./Services/logics')
//3.Create a backend application using express
const contactServer=express()
//4.Connecting frontend application using cors
contactServer.use(cors({

    origin:'http://localhost:3000'
}))
//5.Convert json data to js and js to json using json() function
contactServer.use(express.json())
//6.Define the port number
contactServer.listen(8000,()=>{
    console.log('Contact server listening on the port 8000');
})
//API call for get all users details
contactServer.get('/get-all-users',(req,res)=>{
    logic.getAllUser(req.body.id,req.body.firstname,req.body.lastname,req.body.city,req.body.street,req.body.number,req.body.email,req.body.phone).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})
// API call for a user
contactServer.post('/add-a-user',(req,res)=>{
    logic.addUser(req.body.id,req.body.firstname,req.body.lastname,req.body.city,req.body.street,req.body.number,req.body.email,req.body.phone).then((response)=>{
            res.status(response.statusCode).json(response)
        })
})
//API call for remove a user
contactServer.delete('/delete-a-user/:id',(req,res)=>{
    logic.deleteUser(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response); 
    })
})

//API call for get a users details
contactServer.get('/get-a-user/:id',(req,res)=>{
    logic.getAUser(req.params.id).then((response)=>{//response - an employees details
        res.status(response.statusCode).json(response);
    })
})

//API call for update a user details
contactServer.post('/update-a-user/:id',(req,res)=>{
    logic.updateAUser(req.body.id,req.body.firstname,req.body.lastname,req.body.city,req.body.street,req.body.number,req.body.email,req.body.phone).then((response)=>{//response - a user details
        res.status(response.statusCode).json(response);
    })
})
    