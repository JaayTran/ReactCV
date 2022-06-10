import React, { Component } from "react";
import ImgProfile from "../../images/person1.webp";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="avatarImg">
          <img
            className="circle responsive-img"
            src={ImgProfile}
            alt="JIMMY TRAN"
          />
        </div>
        <div className="card light-blue darken-4 z-depth-0 hide-on-large-only">
          <div className="card-content center social">
            <h2 className="grey-text text-lighten-3">
              <strong>JIMMY TRAN</strong>
            </h2>
            <h5 className="grey-text text-lighten-1">
              Full Stack Web Developer
            </h5>
            <a href="https://www.linkedin.com/in/jaaytran/" target="blank">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/JaayTran/" target="blank">
              <i className="fab fa-github-square fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="card light-blue darken-4 z-depth-0">
          <div className="card-content">
            <h6 className="white-text">
              <strong>About Me</strong>
            </h6>
            <hr />
            <p className="grey-text text-lighten-3 pt">
              Hey, I'm Jimmy. I am a new grad from Ryerson (now Toronto
              Metropolitan) University. I love learning new things, facing
              challenges and having fun.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
