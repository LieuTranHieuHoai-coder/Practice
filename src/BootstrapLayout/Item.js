import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="card">
        <div
          className="bg-secondary"
          style={{
            position: "relative",
            height: 325
          }}
        >
          <h3 className="position-absolute top-50 start-50 translate-middle">500 x 325</h3>
        </div>

        <div className="card-body text-center mt-3 mb-3">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div class="card-footer text-center">
          <a href="#" className="btn btn-primary">
            Find Out More!
          </a>
        </div>
      </div>
    );
  }
}
