import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const name = "Ipsita priyadarsini";
const img1 = "https://picsum.photos/id/1/200/300";
const img2 = "https://picsum.photos/id/10/200/300";
const img3 = "https://picsum.photos/id/56/200/300";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true">
      My name is {name}
    </h1>

    <div className="img_div">
      <img src={img1} alt="randimg" />
      <img src={img2} alt="randimg" />
      <img src={img3} alt="randimg" />
    </div>
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
