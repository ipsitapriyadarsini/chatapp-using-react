import "./Message.css";
import styled from "styled-components";
import { messagesList } from "../../messagesData";
import MessageInput from "./MessageInput";

var dt = new Date();
var hours = dt.getHours();
var minute = dt.getMinutes();
hours = hours % 12 || 12;
var suffix = hours > 12 ? "PM" : "AM";
var strTime = hours + ":" + minute + " " + suffix;

const MessageDiv = styled.div`
  justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
  display: flex;
  margin: 5px 10px;
`;
const Messages = styled.div`
  background-color: ${(props) => (props.isYours ? "#daf8cd" : "white")};
  max-width: 70%;
  padding: 8px 10px;
  font-size: 14px;
  border-radius: 5px;
`;

const Message = () => {
  return (
    <>
      <div className="message-container">
        {messagesList.map((userMessage) => (
          <MessageDiv isYours={userMessage.senderID === 0}>
            <Messages key={userMessage.id} isYours={userMessage.senderID === 0}>
              {userMessage.text}
              <section className="timing">{strTime}</section>
            </Messages>
          </MessageDiv>
        ))}
      </div>
      <MessageInput textItem=""/>
    </>
  );
};

export default Message;
