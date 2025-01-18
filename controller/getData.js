import { GoogleGenerativeAI  } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();
const genai = new GoogleGenerativeAI(process.env.APi_KEY)
const model = genai.getGenerativeModel({model:"gemini-1.5-flash"});

export const getData = async(req,res) => {
        const response = await getResponse(req.body.question)
        const json = { response: response };
        res.send(json)        
}

async function getResponse(question){
    const result  = await model.generateContent(question);
          const completionText = result.response.text()
          return completionText
  }

