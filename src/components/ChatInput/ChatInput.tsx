import "./ChatInput.css"

type Props = {
    input: string,
    setInput: (value: string) => void,
    onSend: () => void,
}

function ChatInput({ input, setInput, onSend }: Props){
    return(
        <div className="chat-input-container">
            <input
                className="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Hvernig get ég aðstoðað?" 
                onKeyDown={(e) => {
                    if(e.key === "Enter"){
                        onSend();
                    }
                }}
                />

                <button
                    onClick={onSend}
                    className="send-button"
                >
                    Senda
                </button>

        </div>
    )
}
export default ChatInput;