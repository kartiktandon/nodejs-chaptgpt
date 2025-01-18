import { GoogleGenerativeAI  } from '@google/generative-ai';
import dotenv from 'dotenv';
import express from 'express'
dotenv.config();
const genai = new GoogleGenerativeAI(process.env.APi_KEY)
const app = express()
const model = genai.getGenerativeModel({model:"gemini-1.5-flash"});
import bodyParser from 'body-parser';

app.use(bodyParser.json())

 function Generate(){
  app.post('/', async(req,res) => {
   const response = await getData(req.body.question)
    res.send(response)
  })

}
async function getData(question){
  const result  = await model.generateContent(question);
        const completionText = result.response.text()
        return completionText
}
Generate()

app.listen('3000', ()=>{
  console.log('server restarted')
})