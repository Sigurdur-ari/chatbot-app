type Props = {
    input: string,
    setInput: (value: string) => void,
    onSend: () => void,
}

function ChatInput({ input, setInput, onSend }: Props){
    return(
        <div
            style={{
                display: "flex",
                gap: "8px",
            }}
        >
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Hvernig get ég aðstoðað?" 
                style={{
                    flex: 1,
                    padding: "12px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",

                }}
                onKeyDown={(e) => {
                    if(e.key === "Enter"){
                        onSend();
                    }
                }}
                />

                <button
                    onClick={onSend}
                    style={{
                        padding: "12px 16px",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#129AD7",
                        color: "#fff",
                        cursor: "pointer",
                    }}
                >
                    Senda
                </button>

        </div>
    )
}
export default ChatInput;