import OpenAI from "openai";
import { chatbot_prompt } from "./lib/prompt.js";

const client = new OpenAI(
    {
        apiKey: process.env.OPENAI_API_KEY,
    }
);

export default async function handleRequest(req, res){

    if(req.method !== "POST"){
        return res.status(405).json({
            "error": "Method not allowed",
        })
    }

    try{
        const { messages } = req.body;

        const response = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: chatbot_prompt,
                },
                ...messages,
            ],
            temperature: 0.2,
        });

        return res.status(200).json({
            response: response.choices[0].message.content || "No response",
        })
    }catch(error){

        console.error("Error handling request: ", error);

        return res.status(500).json({
            "error": "Internal server error",
        })
    }
}