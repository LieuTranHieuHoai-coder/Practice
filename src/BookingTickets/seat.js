import React, { Component } from "react";
import { connect } from "react-redux";
import { actAdd } from "./../redux/actions";

class Seat extends Component {
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
              <input type="checkbox" className="seats" defaultValue={item.soGhe} onChange={() => this.props.Add(item)}/>
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
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Seat);