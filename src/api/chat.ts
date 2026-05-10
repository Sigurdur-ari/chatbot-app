import type { Message } from "../types/chat";

export async function sendChatMessage(messages: Message[]){

    console.log("Sending API request");

    // Create a request to the OpenAI API through the api route with the system prompt and the user messages
    const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
            "content-type": "application/json",
    
        }, 
        body: JSON.stringify({
            messages,
        })
    })

    if(!response.ok){
        throw new Error("Failed to send API request");
    }

    const data = await response.json();

    return data.response;
}