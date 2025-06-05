import express from 'express'
import dotenv from 'dotenv'
import {connectDB} from './lib/db.js'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { app,server } from './lib/socket.js'




dotenv.config()
  
const PORT = process.env.PORT
app.use(express.json())
app.use(cookieParser())
app.use(cors(
    {
        origin: process.env.CLIENT_URL,
        credentials: true,
        
    }
))



app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)





server.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT)
    connectDB()
})