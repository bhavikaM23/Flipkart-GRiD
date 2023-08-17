import { config } from "dotenv"
config()

import { Configuration, OpenAIApi } from "openai"
import readline from "readline"
console.log('API Key from .env:', process.env.API_KEY);

const openai = new OpenAIApi({ apiKey: "Bearer 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" });

//const openai = new OpenAIApi({ apiKey: `Bearer ${process.env.API_KEY}` });

//const apiKey = process.env.API_KEY;


//const openai = new OpenAIApi({apiKey})

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})
userInterface.prompt()
userInterface.on("line",async input => {
    const res = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user",content: "input" }
]
    })
    console.log(res.data.choices[0].message.content)
    userInterface.prompt()
})


