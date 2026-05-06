import { useState } from "react";
import type { Message } from "../types/chat";
import { sendChatMessage } from "../api/chat";

export function useChat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false); 
    
    async function sendMessage(content: string){

        console.log("Sending message");

        // Prevent sending empty messages
        if (!content.trim()) return; 

        const userMessage: Message = {
            role: "user", 
            content,
        };

        //Update the messages state with the new user message before sending the API request
        const updateMessages = [...messages, userMessage];
        setMessages(updateMessages);
        setLoading(true);

        try{
            //Fetch the response from the API with the new userMessage included
            const response = await sendChatMessage(updateMessages);

            const botMessage: Message = {
                role: "assistant",
                content: response,
            };

            //Update the messages state with the new bot message after recieveing the response
            setMessages([...updateMessages, botMessage]);
        } catch (error){
            // If there's an error, we can still update the messages state to show an error message to the user
            setMessages([...updateMessages, 
                {
                    role: "assistant",
                    content: "Sorry, something went wrong. Please try again.",
            }
        ]);
        //Console log for debugging purposes, in case the API request fails. 
        console.error("Error sending message: ", error);
        } finally {
            setLoading(false);
        }
    }

    return{
        messages, 
        loading, 
        sendMessage,
    }
}