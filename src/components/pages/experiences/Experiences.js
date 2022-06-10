import React, { Component } from "react";

export default class Experiences extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0">
          <div className="card-content">
            <h6>
              <strong>
                <i className="fas fa-briefcase"></i> EXPERIENCE
              </strong>
            </h6>
            <hr />
            <div className="row mt">
              <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <strong>Freelance Developer</strong>
                    <span>June '21 - Present</span>
                  </h6>
                  <p className="pt">
                    · Discussed requirements and features of product requested
                    with customer.
                    <br />
                    · Provided accurate feedback, input and expectations of
                    requirements.
                    <br />
                    · Maintained professional relations to customer during
                    production stages.
                    <br />· Delivered product to customer by deadlines set.
                  </p>
                </blockquote>
              </div>

              <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <strong>
                      {" "}
                      CANFAR <br /> Data Research Analyst Intern{" "}
                    </strong>
                    <span>Sept '14 - June '15</span>
                  </h6>
                  <p className="pt">
                    · Performed database work; collecting and inputting
                    donations, contact information, potential sponsors and
                    company/personal information
                    <br />
                    · Contacted executives of large companies for sponsorships
                    and participation in events
                    <br />
                    · Compiled data for weekly meetings and set up conference
                    rooms
                    <br />· Interpreted data into visual forms to show what
                    areas were reached or overlooked
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
