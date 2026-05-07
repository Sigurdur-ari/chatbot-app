import type { Message } from "../../types/chat";
import MessageBubble from "../MessageBubble/MessageBubble";

import "./ChatWindow.css";

type Props = {
    messages: Message[],
    loading: boolean,
}

function ChatWindow({ messages, loading }: Props){
    return (
        <div className="chat-window">
            {messages.map((message, index) => (
                <MessageBubble key={index} message={message}/>
            ))}

            {loading && <p style={{ color: "#fff" }}>Thinking...</p>}

        </div>
    );
}
export default ChatWindow;