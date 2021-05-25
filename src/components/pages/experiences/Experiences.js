import React, { Component } from 'react'

export default class Experiences extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0">
          <div className="card-content">
            <h6>
              <strong>
                <i className="fas fa-tools"></i> EXPERIENCE
              </strong>
            </h6>
            <hr />
            <div className="row mt">
              <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <strong>Daisy Social<br />Sous-Chef</strong>
                    <span>Nov '19' - May '21</span>
                  </h6>
                  <p className="pt">
                  · Designed and executed new/rotating seasonal menu items.
                  <br />
                  · Prepped meat and produce for service.
                  <br />
                  · Provided aide running daily operations of daughter establishment Beach Shack.
                  </p>
                </blockquote>
              </div>
           
              <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <strong> CANFAR <br /> Data Research Analyst Intern </strong>
                    <span>Sept '14 - June '15</span>
                  </h6>
                  <p className="pt">
                  · Performed database work; collecting and inputting donations, contact information, potential sponsors and
                  company/personal information
                  <br />
                  · Contacted executives of large companies for sponsorships and participation in events
                  <br />
                  · Compiled data for weekly meetings and set up conference rooms
                  <br />
                  · Interpreted data into visual forms to show what areas were reached or overlooked
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
