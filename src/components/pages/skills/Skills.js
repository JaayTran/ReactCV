import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div>
        <div className="card light-blue darken-4 z-depth-0">
          <div className="card-content">
            <h6 className="white-text">
              <strong>Professional Skills</strong>
            </h6>
            <hr />
            <div className="white-text">
              <h6><u>Programming</u></h6>
              <p>Java, C#, C++, Python, HTML/CSS, JavaScript ES6, PHP, SQL</p>
              <h6><u>Tools and Frameworks</u></h6>
              <p>React.js, Node.js, MySQL, Unity, OpenGL, MongoDB, Git, Linux</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
