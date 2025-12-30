import React, { useState } from "react";
import "./Chatbot.css";
import { MessageCircle, X, Send, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  // Afkar WhatsApp number (change if needed)
  const supportNumber = "2347026842722";

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const whatsappUrl = `https://wa.me/${supportNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
    setMessage("");
  };

  return (
    <div className="chatbot-container">
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="chat-header">
              <div className="chat-header-info">
                <div className="status-dot" />
                <div>
                  <h4>Afkar Support</h4>
                  <span>Typically replies within a few minutes</span>
                </div>
              </div>
              <button onClick={toggleChat} className="close-chat-btn">
                <X size={20} />
              </button>
            </div>

            <div className="chat-body">
              <div className="system-message">
                <div className="avatar-circle">
                  <User size={16} />
                </div>
                <div className="msg-bubble">
                  Assalamu alaikum 👋 <br />
                  How can Afkar Schools assist you today with admissions,
                  academics or general enquiries?
                </div>
              </div>
            </div>

            <form className="chat-footer" onSubmit={handleSend}>
              <input
                type="text"
                placeholder="Type your message for Afkar Schools..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" className="send-btn">
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        className={`chat-toggle-btn ${isOpen ? "open" : ""}`}
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat with Afkar Schools on WhatsApp"
      >
        {isOpen ? <X size={26} /> : <MessageCircle size={26} />}
      </motion.button>
    </div>
  );
};

export default Chatbot;
