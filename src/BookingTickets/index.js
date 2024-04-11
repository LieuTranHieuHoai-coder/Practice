import React, { Component } from "react";
import Line from "./line";

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
            <div
              className="seatStructure txt-center"
              style={{ overflowX: "auto", width: "100%" }}
            >
              <p id="notification" />
              <Line />
              <div className="screen">
                <h2 className="wthree">Screen this way</h2>
              </div>
              <button>Confirm Selection</button>
            </div>
            <div
              className="displayerBoxes txt-center"
              style={{ overflowX: "auto", width: "100%" }}
            >
              <table className="Displaytable w3ls-table" width="100%">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Number of Seats</th>
                    <th>Seats</th>
                  </tr>
                  <tr>
                    <td>
                      <textarea id="nameDisplay" defaultValue={""} />
                    </td>
                    <td>
                      <textarea id="NumberDisplay" defaultValue={""} />
                    </td>
                    <td>
                      <textarea id="seatsDisplay" defaultValue={""} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="copy-wthree">
          <p>
            © 2018 Movie Seat Selection . All Rights Reserved | Design by
            <a href="http://w3layouts.com/" target="_blank">
              W3layouts
            </a>
          </p>
        </div>
      </div>
    );
  }
}
