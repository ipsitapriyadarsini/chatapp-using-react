import React, { useState } from "react";
import "./MessageInput.css";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";
import Picker from "emoji-picker-react";
import { messagesList } from "../../messagesData";

const MessageInput = (props) => {
  const [text, setText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [listMessage, setListMessage] = useState(messagesList);

  const onEmojiClick = (event, emojiObject) => {
    setText(text + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  const onEnterPress = (event) => {
    if (event.key === "Enter") {
      const newMessage = {
        id: Math.random(10),
        messageType: "TEXT",
        text: text,
        senderID: 0,
      };
      messagesList.push(newMessage);
      setListMessage(newMessage);
      setText("");
    }
  };
  return (
    <>
      <div className="message-box">
        {showEmojiPicker && (
          <Picker
            pickerStyle={{
              position: "absolute",
              bottom: "140px",
            }}
            onEmojiClick={onEmojiClick}
          />
        )}
        <a
          className="emoji"
          onClick={() => {
            setShowEmojiPicker(!showEmojiPicker);
          }}
        >
          <EmojiEmotionsIcon />
        </a>

        <input
          placeholder="Type a message..."
          value={text}
          onKeyDown={onEnterPress}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <a className="camera" style={{ marginLeft: "15px" }}>
          <CameraAltIcon />
        </a>
        <a className="sendMessage" style={{ marginLeft: "10px" }}>
          <SendIcon />
        </a>
      </div>
      <button>
        <KeyboardVoiceIcon />
      </button>
    </>
  );
};

export default MessageInput;
