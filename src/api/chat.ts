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

    const response = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "system",
                content: chatbot_prompt,
            },
            ...messages,
        ],
    });

    return response.choices[0].message.content || "No response";
}