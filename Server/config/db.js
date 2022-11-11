import mongoose from 'mongoose'
import dotenv from 'dotenv'


const dbconnect=()=>{   
    dotenv.config()
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then(()=>{
    console.log('connected to db sucessfully')
    }).catch((err)=>{
        console.log(err)
    })
}


export default dbconnect