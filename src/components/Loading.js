import React from "react";

class Loading extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 2000);
  }

  render() {
    let { isLoading } = this.state;
    return <>{isLoading ? <h4>Loading.....</h4> : <h4>Loaded</h4>}</>;
  }
}

export default Loading;
