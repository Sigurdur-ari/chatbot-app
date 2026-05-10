import { useState } from "react";
import { useChat } from "./hooks/useChat";
import ChatInput from "./components/ChatInput/ChatInput";
import ChatWindow from "./components/ChatWindow/ChatWindow";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const { messages, loading, sendMessage } = useChat();

  function handleSend(){
    sendMessage(input);
    setInput("");
  }
  

  return (
    <div className="app">
      <div className="app-header">
        <h1 className="app-title">Aðstoðarvélmennið</h1>
        <p className="app-subtitle">
          Spjallmenni sem getur svarað flestum spurningum varðandi greiðslur og fjármál fyrirtækisins!
        </p>
      </div>
      <ChatWindow messages={messages} loading={loading} />

      <ChatInput input={input} setInput={setInput} onSend={handleSend} />
      
    </div>
  )
}

export default App
