import React, { Component } from "react";
import Contents from "./contents";

export default class BookingTickets extends Component {
  render() {
    return (
      <div>
        <h1>Movie Seat Selection</h1>
        <div className="container">
          <div className="w3ls-reg">
            <div className="inputForm">
              <h2>fill the required details below and select your seats</h2>
              <div className="mr_agilemain">
                <div className="agileits-left">
                  <label>
                    {" "}
                    Name
                    <span>*</span>
                  </label>
                  <br />
                  <input type="text" id="Username" required />
                </div>
                <div className="agileits-right">
                  <label>
                    {" "}
                    Number of Seats
                    <span>*</span>
                  </label>
                  <input type="number" id="Numseats" required min={1} />
                </div>
              </div>
              <button>Start Selecting</button>
            </div>
            <ul className="seat_w3ls">
              <li className="smallBox greenBox">Selected Seat</li>
              <li className="smallBox redBox">Reserved Seat</li>
              <li className="smallBox emptyBox">Empty Seat</li>
            </ul>
            <Contents></Contents>
          </div>
        </div>
      </div>
    );
  }
}
