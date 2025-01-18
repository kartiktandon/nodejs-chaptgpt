import express from 'express'
const app = express()
import bodyParser from 'body-parser';
import {router as homeroute} from './router/data.js'
app.use(bodyParser.json())
app.use('/data', homeroute)

app.listen('3000', ()=>{
  console.log('server restarted')
})