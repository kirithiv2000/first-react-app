import React from "react";
import "./styles.css";

class CountThe extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  addN = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  subN = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <button onClick={this.addN}>+</button>
        <button onClick={this.subN}>-</button>
      </div>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello React app</h1>
      <CountThe />
      <h2>Click buttons to see some magic happen!</h2>
    </div>
  );
}
