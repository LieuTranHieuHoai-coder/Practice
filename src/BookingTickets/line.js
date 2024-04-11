import React, { Component } from "react";
import { connect } from "react-redux";
import Seat from "./seat";

class Line extends Component {
  renderSeat = () => {
    const { list } = this.props;
    return list?.map((item,index) => {
      return(
         <tr key={index} >
            <td>{item.hang}</td>
            <Seat seat={item.danhSachGhe} number={item.hang}></Seat>
         </tr>
      )
    });
  }
  render() {
    return (
      <>
        <table id="seatsBlock">
          <tbody>
          {
            this.renderSeat()
          }
          </tbody>
        </table> 
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.ticketReducer.listSeat,
});
export default connect(mapStateToProps,null)(Line);