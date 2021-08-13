import logo from "./logo.svg";
import "./App.css";

function App() {
  let date = new Date();
  date = date.getHours;
  let greet = "";
  const cssStyle = {};

  if (date > 5 && date <= 11) {
    greet = "Good Morning!!";
    cssStyle.color = "#FFB740";
  } else {
    if (date >= 12 && date <= 16) {
      greet = "Good Afternoon!!";
      cssStyle.color = "#B61919";
    } else {
      if (date >= 17 && date <= 19) {
        greet = "Good Evening!!";
        cssStyle.color = "#64C9CF";
      } else {
        greet = "Good Night!!";
        cssStyle.color = "#7FC8A9";
      }
    }
  }

  const hello = () => {
    let ans = alert("What is your name");
  };

  return (
    <div className="App">
      <h1>
        Hello, <span style={cssStyle}>{greet}</span>
      </h1>
    </div>
  );
}

export default App;
