//Backend logics
//import db.js file

const db=require('../Services/db')

const getAllUser=()=>{
    return db.user.find().then((result)=>{
        if(result){
            return{
                statusCode:200,
                users:result
            }
        }
        else{
            return{
                statusCode:404,
                message:'cant find user'
            }
        }
    })
}
//Add a new deatils into the database
const addUser=(id,firstname,lastname,city,street,number,email,phone)=>{
    return db.user.findOne({id}).then((result)=>{
        if(result){//If the id is already in the database
            return {
                statusCode:404,
                message:"User already exists"
            }
        }
        else{//The id is not in the database then it save to the database
            const newUser = new db.user({id,firstname,lastname,city,street,number,email,phone})
            //to save to the database
            newUser.save()
            return{
                statusCode:200,
                message:"User added successfully"
            }
        }
    })

}
//Delete a user from  the database
const deleteUser=(id)=>{
    return db.user.deleteOne({id}).then((result)=>{
        return{
            statusCode:200,
            message:"User deleted successfully"
        }
    })
    .catch((error)=>{
        return{
            statusCode:401,
            message:"Couldn't find employee"
        }
    })

}
//Get a particular user from the database
const getAUser=(id)=>{
    return db.user.findOne({id}).then((result)=>{//result - details of employees
        if(result){
                return {//send to frontend
                    statusCode:200,
                    users:result
                }
        }
        else{
                return {
                    statusCode:404,
                    message:'cant find the user'
                }
        }
    })
}
//update a user details
const updateAUser=(id,firstname,lastname,city,street,number,email,phone)=>{//updated data
    return db.user.findOne({id}).then((result)=>{//result - details of users
        if(result){
            //assiging updated information to the database values
            result.id = id;
            result.firstname = firstname;
            result.lastname = lastname;
            result.city = city;
            result.street = street;
            result.number = number;
            result.email = email;
            result.phone = phone;

            //save updated details into db
            result.save()
            
                return {//send to frontend
                    statusCode:200,
                    message:"User data updated successfully"
                }
        }
        else{
                return {
                    statusCode:404,
                    message:'cant find user'
                }
        }
    })
}


module.exports={
    getAllUser,
    addUser,
    deleteUser,
    getAUser,
    updateAUser
}