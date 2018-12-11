import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
    // imageUrl: "https://picsum.photos/200"
  };

  styles = {
    fontSize: 40,
    fontWeight: "italic"
    //Implementation-><span style={this.styles} className="badge badge-primary m-2">
  };
  render() {
    return (
      <React.Fragment>
        <span style={{ fontSize: 10 }} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
