import React, { Component } from "react";
import { connect } from "react-redux";
import { actConfirm, actAdd } from "../redux/actions";

class Line extends Component {
  handleAdd = (e, data) => {
    if (this.props.showName === null || this.props.numberOfSeat === 0) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      e.target.checked = false;
    } else {
      this.props.Add(data);
    }
  };

  renderLine = () => {
    const { list, cancelSeat } = this.props;
    const cloneListSeat = [...list];
    
    return cloneListSeat?.map((item, index) => {
      return (
        <tr key={index}>
          <td key={index}>{item.hang}</td>
          { this.renderSeat(item.danhSachGhe,item.hang) }
        </tr>
      );
    });
  };
  renderSeat = (data, hang) => {
    let i = 1;
    return data.map((item) => {
      if (hang === ""){
        return(
          <td key={i++}>
            {i}
          </td>
        )
      }else{
        if (item.daDat) {
          return (
            <td key={i++}>
              <input
                type="checkbox"
                className="seats"
                disabled
                defaultChecked={item.daDat}
                defaultValue={item.soGhe}
              />
            </td>
          );
        } else {
          return (
            <td key={i++}>
              <input
                type="checkbox"
                className="seats"
                defaultChecked={item.daDat}
                defaultValue={item.soGhe}
                onChange={(e) => this.handleAdd(e, item)}
              />
            </td>
          );
        }
      }
      
    });
  };
  render() {
    return (
      <>
        <table id="seatsBlock">
          <tbody>{this.renderLine()}</tbody>
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
  cancelSeat: state.ticketReducer.cancelSeat,
  numberOfSeat: state.ticketReducer.numberOfSeat,
  showName: state.ticketReducer.name,
});

const mapDispatchToProps = (dispatch) => {
  return {
    confirm: () => {
      dispatch(actConfirm());
    },
    Add: (data) => {
      dispatch(actAdd(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Line);
