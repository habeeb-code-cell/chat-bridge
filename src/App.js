import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// Simple utility to format timestamps (e.g., "2 minutes ago")
function timeAgo(timestamp) {
  const now = new Date();
  const diff = (now - new Date(timestamp)) / 1000; // seconds

  if (diff < 5) return 'just now';
  if (diff < 60) return `${Math.floor(diff)}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return new Date(timestamp).toLocaleDateString();
}

function App() {
  // Chat state
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Theme state (light/dark)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('chat-theme') || 'light';
  });

  // Refs
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const audioRef = useRef(null);

  // Scroll to bottom on new messages (unless user scrolled up)
  useEffect(() => {
    if (!showScrollButton) {
      scrollToBottom();
    }
  }, [messages, showScrollButton]);

  // Listen to scroll to toggle "new messages" button
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const onScroll = () => {
      const isNearBottom =
        container.scrollHeight - container.scrollTop - container.clientHeight < 100;
      setShowScrollButton(!isNearBottom);
    };

    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  // Save theme to localStorage and update <body> class
  useEffect(() => {
    localStorage.setItem('chat-theme', theme);
    document.body.className = theme; // assume your CSS uses body.light and body.dark
  }, [theme]);

  // Scroll helper
  function scrollToBottom() {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  // Toggle theme handler
  function toggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  // Send message handler
  function handleSendMessage() {
    if (!messageText.trim()) return;

    const userMessage = {
      sender: 'You',
      text: messageText.trim(),
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessageText('');
    setShowScrollButton(false);

    setIsBotTyping(true);

    setTimeout(() => {
      const botMessage = {
        sender: 'Bot',
        text: getBotResponse(userMessage.text),
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsBotTyping(false);

      if (audioRef.current) audioRef.current.play();
    }, 1500);
  }

  // Bot response logic
  function getBotResponse(input) {
    const text = input.toLowerCase();
    if (text.includes('hello')) return 'Hi there!';
    if (text.includes('see whines')) return "Boss I no fit whine you, who goes me? I wan die.";
    if (text.includes('baby')) return "Yes darling";
    if (text.includes('i miss you')) return "I miss you more, can't wait to have you in my arms.";
    if (text.includes('have you eaten')) return "Yes, I had pasta.";
    if (text.includes('i hate you')) return "I love you too, stop the pretence.";
    if (text.includes('hwfa')) return "I dey my chairman.";
    if (text.includes('any better')) return "Boss, you fit get for me make I drop aza.";
    if (text.includes('how are you')) return "I'm just cold, but I'm good!";
    if (text.includes('hi')) return 'Hello there!';
    if (text.includes('how is work')) return "Work been great.";
    if (text.includes('how fa')) return "I dey alright.";
    if (text.includes('bye')) return 'See you later!';
    if (text.includes('how today')) return "Fine ohh.";
    if (text.includes('how your side')) return "Steady grinding.";
    if (text.includes('you good')) return "Yh, I should be.";
    if (text.includes('gym')) return "Yh sure, I trust you’re coming over too. Mine should be leta. See you leta chief.";
    return "Sorry, I don't understand.";
  }

  return (
    <div className={`chat-container ${theme}`}>
      <div className="chat-header">
        Chat Bridge
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark/light theme"
          className="theme-toggle-btn"
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>

      <div className="chat-messages" ref={messagesContainerRef}>
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.sender.toLowerCase()}`}>
            <div className="avatar">{msg.sender === 'You' ? '🙂' : '🤖'}</div>
            <div className="message-content">
              <span className="sender">{msg.sender}:</span>
              <span className="text"> {msg.text}</span>
              <span className="timestamp">{timeAgo(msg.timestamp)}</span>
            </div>
          </div>
        ))}

        {isBotTyping && (
          <div className="message bot typing-indicator">
            <div className="avatar">🤖</div>
            <div className="message-content">
              <span className="text">Bot is typing...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {showScrollButton && (
        <button className="scroll-button" onClick={scrollToBottom} aria-label="Scroll to bottom">
          ↓ New Messages
        </button>
      )}

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

      <audio
        ref={audioRef}
        src="https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg"
        preload="auto"
      />
    </div>
  );
}

export default App;
