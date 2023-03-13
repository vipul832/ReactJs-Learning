import React, { useState } from "react";

class Button extends React.PureComponent {
  render() {
    console.log("render child", this.props.id);
    return <button className="btn btn-primary btn-sm">{this.props.id}</button>;
  }
}

function Info() {
  const [Sta, setSta] = useState(0);
  return (
    <div className="container">
      <h1>React Js</h1>
      <p>A JavaScript library for building user interfaces</p>
      <Button id={Sta} />
      <button onClick={() => setSta((s) => s + 1)}>{Sta}</button>
    </div>
  );
}
export default Info;
