📱 Chat Bridge

Chat Bridge is a clean, responsive, and fully frontend React chat application. It allows users to send messages and receive simulated bot responses. Designed with scalability in mind, it's built to easily integrate a backend for real-time messaging in the future.


🚀 Features

- **Interactive Chat Interface**  
  Chat with a friendly bot that responds based on your messages with customized replies.

- **Timestamps**  
  Messages display human-readable timestamps (e.g., "just now", "5m ago", or date).

- **Typing Indicator**  
  Shows when the bot is "typing" a reply to make the chat feel more alive.

- **Scroll to Bottom Button**  
  If you scroll up, a "↓ New Messages" button appears to quickly jump back down.

- **Notification Sound**  
  Plays a subtle sound when the bot sends a message.

- **Dark/Light Theme Toggle**  
  Switch between light and dark modes with a button in the header.  
  - Theme preference is saved in `localStorage` to persist across sessions.  
  - Smooth animated transitions between themes for a polished look.
  
✅ Responsive design (mobile, tablet, desktop)

✅ Clean and modern UI

✅ Unlimited scrollable chat history

✅ Auto-scroll to latest message

✅ Simple simulated bot responses

✅ Built with React and CSS (no JSX)

🧱 Technologies Used
React (no JSX)

External CSS (responsive design)

React Hooks (useState, useEffect, useRef)

Placeholder logic for future API or real-time backend

📦 Setup Instructions
1. Clone the repository
bash
Copy code
git clone https://github.com/YOUR_USERNAME/chat-bridge.git
cd chat-bridge
2. Install dependencies
bash
Copy code
npm install
3. Start development server
bash
Copy code
npm start
App runs locally at:
http://localhost:3000

🌍 Deploy to Render
This project is deployable as a static site:

🔧 Render Configuration
Setting	Value
Build Command	npm run build
Publish Directory	build

Deployed URL will be something like:

arduino
Copy code
https://chat-bridge.onrender.com
💡 Future Enhancements
🔌 Backend integration (Node.js + Express)

💬 Real-time chat (Socket.io or Firebase)

🔐 Authentication & user accounts

📁 Message history storage

📷 Media attachments

🤝 Contributing
Contributions are welcome!
To contribute:

Fork the repository

Create a new branch (git checkout -b feature-name)

Commit your changes

Push to your fork and submit a pull request

📄 License
MIT License

🙌 Acknowledgements
Built with ❤️ using React and pure JavaScript.