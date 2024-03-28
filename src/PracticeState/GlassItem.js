import React, { Component } from "react";

export default class GlassItem extends Component {
  render() {
    return (
      <>
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="position-relative">
            <img
              src={"./images/model.jpg"}
              className="img-fluid"
              style={{ width: 250 }}
            />
            <img
              src={this.props.SendItem}
              style={{ width: 150, translate: "-133% 165%", opacity: 0.7 }}
              className="position-absolute"
            />
          </div>
        </div>
      </>
    );
  }
}
