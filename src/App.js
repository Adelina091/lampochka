import React from "react";
import "./styles.css";
import lightoff from "./image/lightoff.png";
import lighton from "./image/lighton.png";

class App extends React.Component {
  constructor() {
    super();
    this.state = { isOn: false };
  }

  changeLight() {
    this.setState((prevState) => ({ isOn: !prevState.isOn }));
  }

  render() {
    const { isOn } = this.state;

    return (
      <div style={{ backgroundColor: isOn ? "white" : "black", minHeight: "100vh" }}>
        <img src={isOn ? lighton : lightoff} alt="light" />
        <button onClick={() => this.changeLight()}>
          {isOn ? "On" : "Off"}
        </button>
      </div>
    );
  }
}

export default App;
