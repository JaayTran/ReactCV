import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0">
          <div className="card-content">
            <h6>
              <strong>
                <i className="fas fa-tools"></i> PROJECTS
              </strong>
            </h6>
            <hr />

            <div className="row mt">
              <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <strong>
                      <a href="https://jaaytran.github.io/ReactCV/">
                        React Resume Website (This one here!)
                      </a>
                    </strong>
                    <span>Jan 2022 - Feb 2022</span>
                  </h6>
                  <p className="pt">
                    · React Web App that shows off my resume in a stylish way
                    <br />· Reduced largest contentful paint 50% from 1.2
                    seconds to .6 seconds by running web performance test to
                    identify opportunities to speed up the loading of the
                    webpage.
                    <br />· Refactored for best practices by validating HTML and
                    CSS using W3C Markup validation service.
                    <br />· Optimized design for 8+ screen sizes (desktop and
                    mobile) using Responsively app, flexbox and media queries.
                  </p>
                </blockquote>
              </div>

              <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <strong>
                      {" "}
                      <a href="https://github.com/JaayTran/robot-boil-house-site">
                        Robot Boil House Site
                      </a>
                    </strong>
                    <span>June '21' - Sept '21</span>
                  </h6>
                  <p className="pt">
                    · Created an ecommerce website for a restaurant using the
                    MERN stack with a ReactJS front end and a NodeJS backend
                    that stores product and user information in MongoDB
                    <br />
                    · Implemented PayPal payments and option to display and
                    inform customers of order completion.
                    <br />
                    · Designed and implemented a user-friendly CRUD interface
                    for managing products and users.
                    <br />
                    · Created database tables in MongoDB to be used with CRUD
                    API methods
                    <br />· Built a data representation model with google charts
                    to summarize orders and users.
                  </p>
                </blockquote>
              </div>

              <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <strong>
                      <a href="https://github.com/JaayTran/Bill-Splitting-App">
                        Bill Splitting App
                      </a>
                    </strong>
                    <span>Jan 2020 - Apr 2020</span>
                  </h6>
                  <p className="pt">
                    · An Android application coded in Java where you can easily
                    manage money lent or borrowed between friends.
                    <br />
                    · Had multiple app sections which updated the view page.
                    <br />· Created an android remote webserver for the
                    application hosted with PHP/MySQL OpenGL
                  </p>
                </blockquote>
              </div>

              <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <strong>
                      <a href="https://github.com/JaayTran/Graphics">
                        OpenGL Drone Project
                      </a>
                    </strong>
                    <span>Jan 2019 - Apr 2019</span>
                  </h6>
                  <p className="pt">
                    · Used C++ & OpenGL to create an interactive 3D drone with a
                    dynamically designed terrain
                    <br />· Implemented other enemy drones that the player needs
                    to attack to survive Membership
                  </p>
                </blockquote>
              </div>

              <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <strong>
                      <a href="https://github.com/Geocrusher/CPS406-Project">
                        Membership Management Software
                      </a>
                    </strong>
                    <span>Jan 2018 - Apr 2018</span>
                  </h6>
                  <p className="pt">
                    · Built a Java app using Swing GUI toolkit that allowed
                    users of a community center to sign-up and pay for classes
                    that were being held.
                    <br />· Worked on different login screens depending on the
                    type of account the user registered as using Swing.
                  </p>
                </blockquote>
              </div>

              <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <strong>
                      <a href="https://github.com/JaayTran/CPS-Projects/blob/master/FeedForward/feedforward.java">
                        Image Recognition App
                      </a>
                    </strong>
                    <span>Sep 2017 - Dec 2017</span>
                  </h6>
                  <p className="pt">
                    · Created a program in Java to read an image of a hand
                    written number and outputs what the number was.
                    <br />· Implemented a neural network to process the image
                    and determine its contents.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
