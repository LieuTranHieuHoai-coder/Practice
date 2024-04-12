import React, { Component } from "react";
import Line from "./line";
import { connect } from "react-redux";
import { data } from "jquery";


class Contents extends Component {
  btnConfirm = () => {};
  render() {
    return (
      <>
        <div
          className="seatStructure txt-center"
          style={{ overflowX: "auto", width: "100%" }}
        >
          <p id="notification" />
          <Line />
          
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
                  <textarea
                    id="nameDisplay"
                    defaultValue={this.props.showName}
                  />
                </td>
                <td>
                  <textarea
                    id="NumberDisplay"
                    defaultValue={this.props.showSeat}
                  />
                </td>
                <td>
                  <textarea
                    id="seatsDisplay"
                    defaultValue={this.props.showlistSelected()}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showName: state.ticketReducer.name,
    showSeat: state.ticketReducer.numberOfSeat,
    showlistSelected: () => {
      let listSelected = [];
      state.ticketReducer.listSelected.map((item) => {
        listSelected.push(item.soGhe);
      });
      return listSelected;
    },
  };
};

export default connect(mapStateToProps,null)(Contents);
