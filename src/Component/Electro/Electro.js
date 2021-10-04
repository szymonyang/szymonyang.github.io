import React, { Component } from "react";

import "./electro.css";

// inspired by https://codepen.io/sean_codes/pen/VbWdRd

// const Electro = () => {
//   return (
//     <div className="electro-container">
//       <div className="top">
//         <div className="title">
//           Come and See My Work. Something behind the Coding
//         </div>
//       </div>
//       <div className="view">
//         <div className="code"></div>
//         <div className="example"></div>
//         <div className="handle">
//           <div className="tracker"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default class Electro extends Component {
  state = { left: 250, width: 250, display: "none" };
  containerRef = React.createRef();
  handleRef = React.createRef();
  mouseDown = () => {
    this.setState({ display: "block" });
  };
  mouseUp = () => {
    this.setState({ display: "none" });
  };

  mouseMove = (event) => {
    let cBox = this.containerRef.current.getBoundingClientRect();
    let hBox = this.handleRef.current.getBoundingClientRect();
    let newX = event.clientX - cBox.left;

    if (newX > cBox.width - hBox.width) newX = cBox.width - hBox.width;

    if (newX < 0) newX = 0;
    // console.log(newX);
    this.move(newX);
  };
  move = (x) => {
    // console.log(x);
    this.setState({ left: x, width: x });
    // console.log(this.state);
  };

  render() {
    return (
      <div className="electro-container" ref={this.containerRef}>
        <div className="top">
          <div className="title">
            Come and See My Work. Something behind the Coding
          </div>
        </div>
        <div className="view">
          <div className="code"></div>
          <div
            className="example"
            style={{ width: this.state.width + "px" }}
          ></div>
          <div
            ref={this.handleRef}
            aria-hidden="true"
            className="handle"
            style={{ left: this.state.left + "px" }}
            onMouseDown={this.mouseDown}
            onMouseUp={this.mouseUp}
          >
            <div
              className="tracker"
              style={{ display: this.state.display }}
              onMouseMove={this.mouseMove}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}
