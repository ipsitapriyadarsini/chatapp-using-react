import React from "react";
import "./Header.css";
import ipsita from "./ipsita.jpg";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Header = () => {
  return (
    <>
      <header>
        <a className="arrow">
          <ArrowBackIcon />
        </a>
        <section className="avtar"> 
        <img src={ipsita} alt="me"/></section>
        <section contact="info">
          <span className="contact-name">Ipsita</span>
          <span className="last-seen">Last seen at 2.00 pm</span>
        </section>
        <a className="file">
          <AttachFileIcon />
        </a>
        <a className="phone">
          <LocalPhoneIcon />
        </a>
        <a className="more">
          <MoreVertIcon />
        </a>
      </header>
    </>
  );
};

export default Header;
