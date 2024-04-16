import React, { Component } from "react";
import Contents from "./contents";
import { connect } from "react-redux";
import { actGetName, actGetSeats } from "../redux/actions";
import Table from "./table";

class BookingTickets extends Component {
  handleOnChangeName = (e) => {
    console.log(e);
    this.props.getName(e.target.value);
  }
  handleOnChangeSeats = (e) => {
    this.props.getSeats(e.target.value);
  }
  render() {
    return (
      <div className="body">
        <h1 className="title">Movie Seat Selection</h1>
        <div className="container">
          <div className="row">
            <div className="w3ls-reg col-md-8">
              <div className="w-100">
                <h2>fill the required details below and select your seats</h2>
                <div className="mr_agilemain">
                  <div className="agileits-left">
                    <label className="label">
                      {" "}
                      Name
                      <span>*</span>
                    </label>
                    <br />
                    <input className="inputData" type="text" id="Username" onChange={this.handleOnChangeName} name="name" required />
                  </div>
                  <div className="agileits-right">
                    <label className="label">
                      {" "}
                      Phone Number
                      <span>*</span>
                    </label>
                    <input className="inputData" type="number" name="seats" pattern="/^\+?\d{1,3}[- ]?\d{1,4}[- ]?\d{2,4}[- ]?\d{2,4}$/" id="Numseats" onChange={this.handleOnChangeSeats} required min="1" max="120" />
                  </div>
                </div>

              </div>
              <ul className="seat_w3ls">
                <li className="smallBox greenBox">Selected Seat</li>
                {/* <li className="smallBox redBox">Reserved Seat</li> */}
                <li className="smallBox emptyBox">Empty Seat</li>
              </ul>
              <Contents></Contents>
            </div>
            <Table></Table>

          </div>


        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getName: (data) => {
      dispatch(actGetName(data));
    },
    getSeats: (data) => {
      dispatch(actGetSeats(data));
    }
  }
}
export default connect(null, mapDispatchToProps)(BookingTickets);