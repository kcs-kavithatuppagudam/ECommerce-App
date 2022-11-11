import express, { json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import dbconnect from './config/db.js'
import registerRouter from './routes/register.js'
import loginRouter from './routes/login.js'
import dashboardRouter from './routes/dashboard.js'


dbconnect()
dotenv.config()

const app=express()
app.use(cors())
app.use(express.json())


app.use('/register',registerRouter)
app.use('/login',loginRouter )
app.use('/dashboard',dashboardRouter)


app.listen(process.env.PORT_NO,()=>{

    console.log('server running at port no 4000')

})


export default app