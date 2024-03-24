import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="card w-100 mt-3 mb-3" style={{ background: 'lightgray', paddingTop: 25, paddingBottom: 25 }}>
        <div className="card-body">
          <h1 className="card-title">A Warm Wellcome</h1>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Call to action
          </a>
        </div>

      </div>
    );
  }
}
