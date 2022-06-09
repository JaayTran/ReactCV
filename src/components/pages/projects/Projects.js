import React, { Component } from 'react'

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
                    <strong>Robot Boil House Site</strong>
                    <span>Nov '19' - May '21</span>
                  </h6>
                  <p className="pt">
                  · Created an ecommerce website for a restaurant using the MERN stack with a ReactJS front end and a NodeJS backend that stores product and user information in MongoDB
                  <br />
                  ·	Implemented PayPal payments and option to display and inform customers of order completion.
                  <br />
                  ·	Designed and implemented a user-friendly CRUD interface for managing products and users.
                  <br />
                  ·	Created database tables in MongoDB to be used with CRUD API methods
                  <br />
                  ·	Built a data representation model with google charts to summarize orders and users.
                  </p>
                </blockquote>
              </div>
           
                         
              <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <strong> Bill Splitting App</strong>
                    <span>Sept '14 - June '15</span>
                  </h6>
                  <p className="pt">
                  ·	An Android application coded in Java where you can easily manage money lent or borrowed between friends. 
                  <br />
                  ·	Had multiple app sections which updated the view page. 
                  <br />
                  ·	Created an android remote webserver for the application hosted with PHP/MySQL OpenGL
                  </p>
                </blockquote>
              </div>

              <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <strong>Drone Project </strong>
                    <span>Sept '14 - June '15</span>
                  </h6>
                  <p className="pt">
                  ·	Used C++ & OpenGL to create an interactive 3D drone with a dynamically designed terrain 
                  <br />
                  ·	Implemented other enemy drones that the player needs to attack to survive Membership 
                  </p>
                </blockquote>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    )
  }
}
