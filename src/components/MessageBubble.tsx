import type { Message } from "../types/chat";

type Props = {
    message: Message;
}

function MessageBubble({ message }: Props){
    const isUser = message.role === "user";

    return (
        <div style={{
            display: "flex",
            justifyContent: isUser ? "flex-end" : "flex-start",
            marginBottom: "16px",
        }}
        >
            <div
                style={{
                    maxWidth: "60%",
                    padding: "12px",
                    borderRadius: "12px",
                    backgroundColor: isUser ? "#006970" : "#001E2E",
                    color: "#fff",
                    whiteSpace: "pre-wrap",
                }}
            >
                {message.content}
            </div>

        </div>
    );
}
export default MessageBubble;
