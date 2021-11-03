import "./index.css";
import { NIGHT, MORNING, AFTERNOON } from "./images/image.js";

let curDate = new Date();
curDate = curDate.getHours();
let greeting = "";
const cssStyle = {};

if (curDate >= 1 && curDate <= 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
  cssStyle.backgroundImage = MORNING;
} else if (curDate >= 12 && curDate < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
  cssStyle.backgroundImage = AFTERNOON;
} else {
  greeting = "Good Night";
  cssStyle.color = "#34495E";
  cssStyle.backgroundImage = NIGHT;
}

const App = () => {
  return (
    <>
      <div style={cssStyle}>
        <h1>
          Hello Dear! <span style={cssStyle}>{greeting}</span>
        </h1>
      </div>
    </>
  );
};
export default App;
