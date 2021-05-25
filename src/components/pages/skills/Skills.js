import React, { Component } from 'react'

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
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">JAVA</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '89%'}}></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">C/C#/C++</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '100%'}}></div>
                </div>
              </div>
            </div>
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">PYTHON</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '95%'}}></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">MYSQL</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '90%'}}></div>
                </div>
              </div>
            </div>
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">JQUERY</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '65%'}}></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">JAVASCRIPT</p>
                <div className="progress white">
                  <div className="determinate grey" style={{ width: '80%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
