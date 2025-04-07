import express from 'express'
const app = express()
import bodyParser from 'body-parser';
import {router as dataRoute} from './router/data.js'
import { router as homeRoute } from './router/home.js';
import {router as signRoute} from './router/signup.js'
import path from 'path'
import {router as loginRouter} from './router/login.js'
import mongoose from 'mongoose';
app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())
app.set("view engine", "ejs")
app.set("views", path.resolve("./views") )
app.use('/data', dataRoute)
app.use('/', homeRoute)
app.use('/signup',signRoute)
app.use('/login', loginRouter)
app.listen('3000', ()=>{
  console.log('server restarted')
})
mongoose.connect('mongodb://localhost:27017/test').then(() => {
  console.log('hello')
}).catch((err) => {
  console.log(' not found')
})