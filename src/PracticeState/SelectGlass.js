import React, { Component } from "react";
import GlassItem from "./GlassItem";
export default class SelectGlass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img_url: "",
    };
  }
  changeGlass = (url) => {
    this.setState({
      img_url: url,
    });
  };
  render() {
    const { img_url } = this.state;
    return (
      <>
        <GlassItem SendItem={img_url} />
        <div
          className="position-absolute top-0 start-0 col-2 col-lg-2 col-md-2 col-sm-4 overflow-auto"
          style={{ height: "100vh", background: "#ffffff" }}
        >
          <div className="container">
            <div className="row g-2">
              {this.props.ListItem.map((item, index) => {
                return (
                  <div
                    className="col-xl-6 col-lg-12 col-12 col-md-12 col-sm-12"
                    key={index}
                    onClick={() => this.changeGlass(item.url)}
                  >
                    <div className="card">
                      <div className="card-body">
                        <p className="card-title">{item.name}</p>
                        <img src={item.url} className="img-thumbnail" alt="" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
