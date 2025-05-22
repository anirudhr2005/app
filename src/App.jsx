
import { useState } from 'react';

export default function App() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleLogin = () => {
    if (username.trim()) {
      setIsLoggedIn(true);
    }
  };

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { user: username, text: message }]);
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        {!isLoggedIn ? (
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-center">Welcome to Chat App</h1>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600"
            >
              Join Chat
            </button>
          </div>
        ) : (
          <div className="flex flex-col h-[400px]">
            <div className="flex-1 overflow-y-auto mb-4 space-y-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                 className={`p-2 rounded-xl max-w-[80%] ${msg.user === username ? 'bg-blue-100 self-end' : 'bg-gray-100'}`}
                >
                  <strong>{msg.user}:</strong> {msg.text}
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border rounded-xl focus:outline-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={handleSend}
                className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
