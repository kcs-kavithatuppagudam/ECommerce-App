import express from 'express'
import auth from '../middlerware/auth.js'
import registerSchema from '../models/registerSchema.js'


const dashboardRouter=express.Router()

dashboardRouter.get('/',auth,async(req,res)=>{

    console.log(req.user,"req.user")
    try{
        let user=await registerSchema.findById(req.user.userid)
        console.log(user,"user in dashboard")
        if(!user){
            return res.send('user doesnot exist')
        }else{
            return res.json(user)
        }
    }
    catch(err){
        console.log(err)
        return res.status(500).send('server error')
}
    
})



export default dashboardRouter