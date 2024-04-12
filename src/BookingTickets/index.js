import React, { Component } from "react";
import Contents from "./contents";
import { connect} from "react-redux";
import { actGetName, actGetSeats } from "../redux/actions";

class BookingTickets extends Component {
  handleOnChangeName = (e) => {
    console.log(e);
    this.props.getName(e.target.value);
  }
  handleOnChangeSeats = (e) => {
    if(e.target.value <= 120){
      this.props.getSeats(e.target.value);
    }
    else{
      alert("Please enter a number between 1 and 120");
      e.target.value = 0;
      this.props.getSeats(e.target.value);
    }
    
  }
  render() {
    return (
      <div>
        <h1>Movie Seat Selection</h1>
        <div className="container">
          <div className="w3ls-reg">
            <div className="inputForm w-100">
              <h2>fill the required details below and select your seats</h2>
              <div className="mr_agilemain">
                <div className="agileits-left">
                  <label>
                    {" "}
                    Name
                    <span>*</span>
                  </label>
                  <br />
                  <input type="text" id="Username" onChange={this.handleOnChangeName} name="name" required />
                </div>
                <div className="agileits-right">
                  <label>
                    {" "}
                    Number of Seats
                    <span>*</span>
                  </label>
                  <input type="number" name="seats" id="Numseats" onChange={this.handleOnChangeSeats} required min="1" max="120"/>
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

const mapDispatchToProps = (dispatch) => {
  return {
    getName: (data) => {
      dispatch(actGetName(data));
    },
    getSeats: (data) =>{
      dispatch(actGetSeats(data));
    }
  }
}
export default connect(null, mapDispatchToProps)(BookingTickets);