
const { useState } = React;

function App() {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");

  function handleSendMessage() {
    if (!messageText.trim()) return;

    const userMessage = {
      sender: 'You',
      text: messageText,
      timestamp: new Date().toLocaleTimeString(),
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setMessageText("");

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
    if (text.includes("hello")) return "Hi there!";
    if (text.includes("how are you")) return "I'm just code, but I'm doing great!";
    if (text.includes("bye")) return "Goodbye! Come back soon.";
    return "I'm not sure how to respond to that.";
  }

  return React.createElement("div", null,
    React.createElement("div", { className: "chat-header" }, "Simple Chat App"),
    React.createElement("div", { className: "chat-messages" },
      messages.map((msg, idx) =>
        React.createElement("div", { className: "message", key: idx },
          React.createElement("span", { className: "sender" }, msg.sender + ": "),
          React.createElement("span", { className: "text" }, msg.text)
        )
      )
    ),
    React.createElement("div", { className: "chat-input" },
      React.createElement("input", {
        type: "text",
        value: messageText,
        onChange: (e) => setMessageText(e.target.value),
        onKeyDown: (e) => { if (e.key === "Enter") handleSendMessage(); },
        placeholder: "Type a message..."
      }),
      React.createElement("button", { onClick: handleSendMessage }, "Send")
    )
  );
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
