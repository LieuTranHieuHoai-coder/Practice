import React, { Component } from "react";
import { connect } from "react-redux";
import { actAdd } from "./../redux/actions";

class Seat extends Component {
  handleAdd = (e,data) => {
    if (this.props.showName === null || this.props.numberOfSeat === 0){
      alert("Vui lòng nhập đầy đủ thông tin!");
      e.target.checked = false;
    }
    else{
      this.props.Add(data);
    }
  }
  renderItem = () => {
    const { seat, number } = this.props;
    return seat?.map((item, index) => {
      
      if (number === ""){
        return(
          <td key={index}>
            {index + 1}
          </td>
        )
      }
      else{
        if (item.daDat){
          return(
            <td key={index}>
              <input type="checkbox" className="seats" disabled defaultChecked={item.daDat} defaultValue={item.soGhe}/>
            </td>
          )
        }
        else{
          return(
            <td key={index}>
              <input type="checkbox" className="seats" defaultValue={item.soGhe} onChange={(e) => this.handleAdd(e,item)}/>
            </td>
          )
        }
        
      }
      
    })
  }
  render() {
    return (
      <>
        {this.renderItem()}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    Add: (data) => { dispatch(actAdd(data)) },
  }
}

const mapStateToProps = (state) =>{
  return{
    numberOfSeat: state.ticketReducer.numberOfSeat,
    showName: state.ticketReducer.name,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Seat);