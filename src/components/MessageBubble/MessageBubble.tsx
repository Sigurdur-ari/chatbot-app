import type { Message } from "../../types/chat";
import "./MessageBubble.css";

type Props = {
    message: Message;
}

function MessageBubble({ message }: Props){
    return (
        <div className={`message-row ${message.role}`}>
            <div className={`message-bubble ${message.role}`}>
                {message.content}
            </div>

        </div>
    );
}
export default MessageBubble;
