import OpenAI from "openai";
import { chatbot_prompt } from "../lib/prompt";
import type { Message } from "../types/chat";

const client = new OpenAI(
    {
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
    }
);

export async function sendChatMessage(messages: Message[]){

    console.log("Sending API request");

    // Create a request to the OpenAI API with the system prompt and the user messages
    const response = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "system",
                content: chatbot_prompt,
            },
            ...messages,
        ],
        // Add a low temperature to make the responses more focused. 
        temperature: 0.2,
    });

    return response.choices[0].message.content || "No response";
}