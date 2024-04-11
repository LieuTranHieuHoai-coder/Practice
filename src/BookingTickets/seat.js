import React, { Component } from "react";

export default class Seat extends Component {
  renderItem = () => {
    const { seat, number } = this.props;
    return seat?.map((item, index) => {
      console.log(number);
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
            <input type="checkbox" className="seats" defaultValue={item.soGhe} />
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
