import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');
  const messagesEndRef = useRef(null);

  // Scroll to bottom every time messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  function handleSendMessage() {
    if (!messageText.trim()) return;

    const userMessage = {
      sender: 'You',
      text: messageText,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessageText('');

    setTimeout(() => {
      const botMessage = {
        sender: 'Bot',
        text: getBotResponse(userMessage.text),
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  }

  function getBotResponse(input) {
    const text = input.toLowerCase();
    if (text.includes('hello')) return 'Hi there!';
    if (text.includes('see whines')) return "Boss i no fit whine you who goes me i wan die";
    if (text.includes('baby')) return "Yes darling";
    if (text.includes('i miss you')) return "I miss you more cant wait to have you in my arms";
    if (text.includes('have you eaten')) return "Yes i had pasta";
    if (text.includes('i hate you')) return "I love you too stop the pretence";
    if (text.includes('hwfa')) return "I dey my chairman";
    if (text.includes('any better')) return "Boss you fit get for me make i drop aza";
    if (text.includes('how are you')) return "I'm just cold, but I'm good!";
    if (text.includes('hi')) return 'Hello there!';
    if (text.includes('how is work')) return "Work been great";
    if (text.includes('how fa')) return "I dey alright";
    if (text.includes('bye')) return 'See you later!';
    if (text.includes('how today')) return "Fine ohh";
    if (text.includes('how your side')) return "Steady grinding";
    if (text.includes('you good')) return "Yh i should be";
    if (text.includes('gym')) return "Yh sure i trust you are coming over too but mine should be leta see you leta chief";
    return "Sorry, I don't understand.";
  }

  return (
    <div className="chat-container">
      <div className="chat-header">Chat Bridge</div>
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.sender}`}>
            <span className="sender">{msg.sender}:</span>
            <span className="text"> {msg.text}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type a message..."
          autoFocus
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
