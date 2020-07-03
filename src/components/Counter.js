import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };

  constructor(props) {
    super(props);
    console.log(`Counter.constructor ${props}`);
  }

  componentWillUnmount() {
    console.log("componentWillMount", arguments);
  }

  componentDidMount() {
    console.log(`componentDidMount ${arguments}`, arguments);
  }

  componentDidUpdate() {
    console.log(`componentDidUpdate ${arguments}`, arguments);
  }

  render() {
    console.log("render");
    return (
      <div>
        Counter:<span>{this.state.count}</span>
        <br />
        <button onClick={this.plus}>plus</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }

  plus = () => {
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };

  minus = () => {
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };
}

export default Counter;
