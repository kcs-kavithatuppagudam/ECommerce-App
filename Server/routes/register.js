import express from 'express'
import registerUser from '../models/registerSchema.js'

const registerRouter=express.Router()

registerRouter.post('/',async(req,res)=>{
    console.log(req.body)
    const {uname,emailid,password,confirmpassword}=req.body

    try{
        if(!req.body){
         return  res.send('must require body')
        }
       
        if(!(uname && emailid && password && confirmpassword)){
           return res.status(400).send('All inputs are required')
        } 
        if(password!==confirmpassword){
           return res.status(400).send('password are not matching')
        }

        let userExist=await registerUser.findOne({emailid})

        if(userExist){
            res.status(409).send('user already exist')
        }

        const newUser=new registerUser({
            uname,emailid,password,confirmpassword
        })

        await newUser.save()

        res.status(200).send('registered sucessfully')
    }
    catch(err){
    console.log(err)
    res.status(500).send("internal server error")
    }
})

export default registerRouter