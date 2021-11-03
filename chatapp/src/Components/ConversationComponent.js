import React from "react";
import Header from "./chatBody/Header";
import Message from "./chatBody/Message";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import styled from "styled-components";

const Footer = styled.footer`
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  width: 360px;
  height: 40px;
  background-color: rgb(0, 0, 0);
  color: white;
`;
const ConversationComponent = () => {
  return (
    <>
      <div className="container">
        <div className="chat-window">
          <div className="chat-header"> </div>
          <Header />
          <Message />
          
        </div>
        <Footer>
          <ArrowBackIosIcon />
          <CropSquareIcon />
          <ArrowForwardIosIcon />
        </Footer>
      </div>
    </>
  );
};

export default ConversationComponent;
