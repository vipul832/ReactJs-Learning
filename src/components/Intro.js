import React, { useState } from "react";

class Button extends React.PureComponent {
  render() {
    return <button className="btn btn-primary btn-sm">Read More</button>;
  }
}

function Intro() {
  const [Sta, setSta] = useState(0);
  return (
    <section className="intro container">
      <div className="introInfo">
        <h1 className="introTitle">React Js</h1>
        <p className="introText">
          A JavaScript library for building user interfaces
        </p>
      </div>
    </section>
  );
}
export default Intro;
