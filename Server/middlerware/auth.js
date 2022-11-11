import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const verifyToken=(req,res,next)=>{
   let token= req.header('x-token')
   console.log(token,"token in verifytoken")
   if(!token){
   return  res.status(403).send('token is required for authentication ')
   }
   try{
    let decoded=jwt.verify(token,process.env.TOKEN_KEY)
    req.user=decoded
    console.log(decoded,"decoded token")
   }
   catch(err){
    console.log(err)
    return res.status(401).send('invalid token')
   }
 
   next()
}


export default verifyToken
