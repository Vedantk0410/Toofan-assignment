import React, { useState } from "react";
import "./Chat.css";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState(null);

  // Handle the message input change
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Handle file attachment
  const handleAttachmentChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAttachment(file);
    }
  };

  // Handle send message (including attachment)
  const handleSendMessage = () => {
    if (message || attachment) {
      // Logic to send message and attachment
      console.log("Message:", message);
      console.log(
        "Attachment:",
        attachment ? attachment.name : "No attachment"
      );

      // Reset input fields
      setMessage("");
      setAttachment(null);
    }
  };

  return (
    <div className="chat-container">
      <div className="d-flex align-items-center">
        {/* Message input container */}
        <div className="input-container">
          {/* File input (hidden) */}
          <input
            type="file"
            className="file-input"
            onChange={handleAttachmentChange}
          />

          {/* Attachment icon inside the message input box */}
          <button
            className="file-icon-btn"
            onClick={() => document.querySelector(".file-input").click()} // Trigger file input click
          >
            <span role="img" aria-label="attachment">
              📎
            </span>
          </button>

          {/* Message input field */}
          <input
            type="text"
            className="form-control message-input"
            value={message}
            placeholder="Type your message here..."
            onChange={handleMessageChange}
          />
        </div>

        {/* Send button */}
        <button
          className="btn btn-info send-button"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>

      {/* Display file name if attached */}
      {attachment && <div className="attachment-info">{attachment.name}</div>}
    </div>
  );
};

export default Chat;
