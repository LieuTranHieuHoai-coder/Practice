import React, { Component } from "react";
import { connect } from "react-redux";
import Seat from "./seat";
import { actConfirm } from "../redux/actions";

class Line extends Component {
  renderSeat = () => {
    const { list } = this.props;
    return list?.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.hang}</td>
          <Seat seat={item.danhSachGhe} number={item.hang}></Seat>
        </tr>
      );
    });
  };
  render() {
    return (
      <>
        <table id="seatsBlock">
          <tbody>{this.renderSeat()}</tbody>
        </table>
        <div className="screen">
          <h2 className="wthree">Screen this way</h2>
        </div>
        <button onClick={() => this.props.confirm()}>Confirm Selection</button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.ticketReducer.listSeat,
});

const mapDispatchToProps = (dispatch) => {
  return {
    confirm: () => {
      dispatch(actConfirm());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Line);
