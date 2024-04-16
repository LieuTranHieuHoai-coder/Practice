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
    const { list } = this.props;
    return list?.map((item, index) => {
      return (
        <tr key={index}>
          <td className="td" key={index}>{item.hang}</td>
          {this.renderSeat(item.danhSachGhe,item.hang) }
        </tr>
      );
    });
    
  };
  renderSeat (data, hang) {
    let i = 1;
    return data.map((item) => {
      if (hang === ""){
        return(
          <td key={i++} className="td text-white">
            {i}
          </td>
        )
      }else{
        if (item.daDat === true) {
          return (
            <td key={i++} className="td">
              <input
                type="checkbox"
                className="seats checkbox"
                disabled
                onChange={(e) => this.setChecked(e)}
                checked={item.daDat}
                defaultValue={item.soGhe}
              />
            </td>
          );
        } else {
          return (
            <td key={i++} className="td">
              <input
                type="checkbox"
                className="seats checkbox"
                checked={item.daDat}
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
        <div className="screen text-center">
          <h2 className="wthree">Screen this way</h2>
        </div>
        {/* <button onClick={() => this.props.confirm()}>Confirm Selection</button> */}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  showlistSeat: () => {
    let list = [];
    state.ticketReducer.listSeat.map((item) => {
      list.push(item);
    });
    return list;
  },
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
