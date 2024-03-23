import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div class="card w-100 mt-3 mb-3" style={{ background: 'lightgray', paddingTop: 25, paddingBottom:25 }}>
        <div class="card-body">
          <h1 class="card-title">A Warm Wellcome</h1>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">
            Call to action
          </a>
        </div>
      </div>
    );
  }
}
