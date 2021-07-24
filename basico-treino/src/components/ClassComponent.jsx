import { Component } from "react";

class ClassComponent extends Component {
 state = {
      name: "João Victor",
      counter: 0
    };

  handlePClick = () => {
    this.setState({ name: "Junior" });
  }

  handleAClick = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  render() {
    const { name, counter } = this.state;
    return (
      <>
        <p onClick={this.handlePClick}>{name}</p>
        <a onClick={this.handleAClick}>{counter}</a>
      </>
    );
  }
}

export default ClassComponent;
