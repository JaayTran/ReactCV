import React, { Component } from 'react'

export default class Educations extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0">
          <div className="card-content">
            <h6>
              <strong><i class="fas fa-graduation-cap"></i> EDUCATION</strong>
            </h6>
            <hr />
            <div className="row mt">

              <div className="col s12">
                <blockquote>
                  <h6 className="no-pad mt-bottom">
                    <strong>Ryerson University</strong>
                    <span>2016 - 2021</span>
                  </h6>
                  <p className="pt">
                  Honours Bachelor of Science Computer Science Major
                  </p>
                </blockquote>
              </div>

              <div className="col s12">
                <blockquote>
                  <h6 className="no-pad mt-bottom">
                    <strong>Ryerson University</strong>
                    <span>2016 - 2021</span>
                  </h6>
                  <p className="pt">
                  Economics Minor
                  </p>
                </blockquote>
              </div>

              <div className="col s12">
                <blockquote>
                  <h6 className="no-pad mt-bottom">
                    <strong>Relevant Courses</strong>
                    <span></span>
                  </h6>
                  <p className="pt">
                  AI, Networks, Algorithms, Databases, Data Structures, Human-Computer Interaction, Software Engineering (Intro, 1, 2), Software Project Management
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
