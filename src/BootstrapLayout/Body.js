import React, { Component } from "react";
import Banner from "./Banner";
import Item from "./Item";
export default class Body extends Component {
  render() {
    return (
      <div className="container px-lg-5">
        <Banner></Banner>
        <div class="row g-3">
          <div class="col-sm-3">
            <Item></Item>
          </div>
          <div class="col-sm-3">
            <Item></Item>
          </div>
          <div class="col-sm-3">
            <Item></Item>
          </div>
          <div class="col-sm-3">
            <Item></Item>
          </div>
        </div>
      </div>
    );
  }
}
