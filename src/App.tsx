import { useState } from "react";
import { useChat } from "./hooks/useChat";
import ChatInput from "./components/ChatInput";
import ChatWindow from "./components/ChatWindow";

function App() {
  const [input, setInput] = useState("");
  const { messages, loading, sendMessage } = useChat();

  function handleSend(){
    sendMessage(input);
    setInput("");
  }
  

  return (
    <div 
      style={{ 
        padding: "20px", 
        maxWidth: "700px", 
        margin: "40px auto",
        fontFamily: "Inter"
      }}
    >
      <h1>Pricing and payment support bot 👾</h1>

      <ChatWindow messages={messages} loading={loading} />

      <ChatInput input={input} setInput={setInput} onSend={handleSend} />
      
    </div>
  )
}

export default App
