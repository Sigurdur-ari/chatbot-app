import { useState } from "react";
import { useChat } from "./hooks/useChat";

function App() {
  const [input, setInput] = useState("");
  const { messages, loading, sendMessage } = useChat();
  
  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "0 auto" }}>
      <h1>Pricing and payment support bot 👾</h1>

      <div>
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>{msg.role}:</strong> {msg.content}
          </p>
        ))}
      </div>

      {loading && <p>Thinking...</p>}

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask a question..."
      />

      <button
        onClick={() => {
          sendMessage(input);
          setInput("");
        }}
      >
        Send
      </button>
    </div>
  )
}

export default App
