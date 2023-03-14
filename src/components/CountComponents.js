import React from "react";

export default class CountComponents extends React.Component {
  // constructor(props)
  // {
  //      super()
  //     this.state={
  //         count:0
  //     }
  //     this.addCount=this.addCount.bind(this)
  // }

  state = {
    count: 0,
  };

  addCount = () => {
    this.setState((curCount) => {
      return {
        count: curCount.count + 1,
      };
    });
  };

  subCount = () => {
    this.setState((curCount) => {
      return {
        count: curCount.count - 1,
      };
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <h3>Counter Display</h3>
        <div className="fs-2">
          <p>{this.state.count}</p>
        </div>
        <div className="">
          <button className="togBtn m-1" onClick={this.addCount}>
            +
          </button>
          <button className="togBtn m-1 " onClick={this.subCount}>
            -
          </button>
        </div>
      </div>
    );
  }
}
