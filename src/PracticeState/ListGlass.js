import React, { Component } from "react";
import data from "./dataGlasses.json";
import SelectGlass from "./SelectGlass";
export default class ListGlass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }

  render() {
    return (
      <div>
        <div
          className="bg-image position-relative"
          style={{
            background:
              'url("./images/background.jpg") no-repeat center center fixed',
            height: "100vh",
            backgroundSize: "cover",
          }}
        >
          <SelectGlass ListItem={this.state.data}></SelectGlass>
        </div>
      </div>
    );
  }
}
