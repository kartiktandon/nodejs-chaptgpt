import express from 'express'
const app = express()
import bodyParser from 'body-parser';
import {router as dataRoute} from './router/data.js'
import { router as homeRoute } from './router/home.js';
import path from 'path'

app.use(bodyParser.json())
app.set("view engine", "ejs")
app.set("views", path.resolve("./views") )
app.use('/data', dataRoute)
app.use('/', homeRoute)

app.listen('3000', ()=>{
  console.log('server restarted')
})