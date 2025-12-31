import React, { useState } from "react";
import "./Chatbot.css";
import { MessageCircle, X, Send, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const supportNumber = "2347026842722";

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const defaultIntro =
      "Hi Mukhtar, I reached your portfolio and would like to talk about ";
    const textToSend = message.trim().startsWith("Hi Mukhtar")
      ? message
      : `${defaultIntro}${message}`;

    const whatsappUrl = `https://wa.me/${supportNumber}?text=${encodeURIComponent(
      textToSend
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setMessage("");
  };

  return (
    <div className="chatbot-container">
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="chat-header">
              <div className="chat-header-info">
                <div className="status-dot" />
                <div>
                  <h4>Mukhtar • Portfolio chat</h4>
                  <span>Typically replies within a day</span>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="close-chat-btn"
                type="button"
              >
                <X size={18} />
              </button>
            </div>

            <div className="chat-body">
              <div className="system-message">
                <div className="avatar-circle">
                  <User size={16} />
                </div>
                <div className="msg-bubble">
                  Hello👋<br />
                  You can send a quick WhatsApp message about projects,
                  internships, or collaborations. Please include your name and a
                  brief context.
                </div>
              </div>

              <div className="preset-row">
                <button
                  type="button"
                  className="preset-chip"
                  onClick={() =>
                    setMessage(
                      "Hi Mukhtar, I’d like to discuss a potential project with you."
                    )
                  }
                >
                  Project enquiry
                </button>
                <button
                  type="button"
                  className="preset-chip"
                  onClick={() =>
                    setMessage(
                      "Hi Mukhtar, I’m interested in talking about internship or role opportunities."
                    )
                  }
                >
                  Roles / internship
                </button>
              </div>
            </div>

            <form className="chat-footer" onSubmit={handleSend}>
              <input
                type="text"
                placeholder="Type your message for Mukhtar..."
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
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Chat with Mukhtar on WhatsApp"
        type="button"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
};

export default Chatbot;
