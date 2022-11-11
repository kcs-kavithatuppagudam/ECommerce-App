import express from 'express'
import userSchema from '../models/registerSchema.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

const loginRouter=express.Router()
dotenv.config()
loginRouter.post('/',async (req,res)=>{

    try{
        const {password,emailid}=req.body
        console.log(req.body,"clientside login data")

        if(!(password&&emailid)){
            return res.status(400).send('All inputs are required ')
        }
    
        let user=await userSchema.findOne({emailid})
        console.log(user,"database user")

        if(user){
         jwt.sign({userid:user.id},process.env.TOKEN_KEY,{expiresIn:3600000},
         (err,token)=>{
            if(err) throw err
            return  res.json({token})
           })      
       }else{
        res.status(400).send('invalid credentials')
       }
   
}
    catch(err){
        console.log(err)
        return res.status(500).send('internal server error')
    }

})

export default loginRouter
