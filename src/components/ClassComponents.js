import React from "react";

class ClassProp extends React.Component {
  state = {
    inText: "yes",
  };

  toogleText = () => {
    this.setState((prevState) => {
      return {
        inText: prevState.inText == "yes" ? "no" : "yes",
      };
    });
  };

  render() {
    return (
      <div>
        <p className="introText">Welcome {this.props.name} !</p>
        <p>Toggle the button Effect using Class Components</p>
        <button className="togBtn" onClick={this.toogleText}>
          {this.state.inText}
        </button>
      </div>
    );
  }
}

export default class ClassComponents extends React.Component {
  render() {
    return (
      <section className="classSection container mt-5">
        <ClassProp name="Amit" />
      </section>
    );
  }
}
