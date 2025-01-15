import { GoogleGenerativeAI  } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();
const genai = new GoogleGenerativeAI(process.env.APi_KEY)

const model = genai.getGenerativeModel({model:"gemini-1.5-flash"})

import readlineSync from 'readline-sync';
import colors from 'colors';


async function generate(){
  console.log(colors.bold.green('Welcome to the Chatbot Program!'));
  console.log(colors.bold.green('You can start chatting with the bot.'));
  while (true) {
    try{
        const userInput = readlineSync.question(colors.yellow('You: '));
        const result  = await model.generateContent(userInput);
        const completionText = result.response.text()
        if (userInput.toLowerCase() === 'exit') {
          console.log(colors.green('Bot: ') + completionText);
          return;
        }
        console.log(colors.green('Bot: ') + completionText);
      }
    catch(err){
      console.log(err)
    }
  }

}

generate()