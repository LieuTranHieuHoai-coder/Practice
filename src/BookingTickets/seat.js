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
        return(
          <td key={index}>
            <input type="checkbox" className="seats" onChange={() => this.props.Add(item)} defaultValue={item.soGhe} />
          </td>
        )
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

export default connect(null, mapDispatchToProps)(Seat);