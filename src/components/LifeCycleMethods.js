import React, { Component } from "react";

export default class LifeCycleMethods extends Component {
  render() {
    return (
      <section className="container mt-5">
        <h3>Life Cycle Methods</h3>
        <div className="card" style={{ width: 18 + "rem" }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">ComponentDidMound</li>
            <li className="list-group-item">ComponentDidUpdate</li>
            <li className="list-group-item">ComponentWillUnmount</li>
          </ul>
        </div>
      </section>
    );
  }
}
