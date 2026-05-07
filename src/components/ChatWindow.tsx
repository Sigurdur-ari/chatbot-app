import type { Message } from "../types/chat";
import MessageBubble from "./MessageBubble";

type Props = {
    messages: Message[],
    loading: boolean,
}

function ChatWindow({ messages, loading }: Props){
    return (
        <div
            style={{
                height: "500px",
                overflowY: "auto", 
                padding: "16px",
                border: "1px solid #1A1C1C",
                borderRadius: "12px",
                marginBottom: "16px",
                backgroundColor: "#1A1C1C"
            }}
        >
            {messages.map((message, index) => (
                <MessageBubble key={index} message={message}/>
            ))}

            {loading && <p style={{ color: "#fff" }}>Thinking...</p>}

        </div>
    );
}
export default ChatWindow;