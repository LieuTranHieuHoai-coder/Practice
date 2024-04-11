import React, { Component } from 'react'
import Line from './line'

export default class Contents extends Component {
  render() {
    return (
      <>
                    <div
              className="seatStructure txt-center"
              style={{ overflowX: "auto", width: "100%" }}
            >
              <p id="notification" />
              <Line />
              <div className="screen">
                <h2 className="wthree">Screen this way</h2>
              </div>
              <button>Confirm Selection</button>
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
                      <textarea id="nameDisplay" defaultValue={""} />
                    </td>
                    <td>
                      <textarea id="NumberDisplay" defaultValue={""} />
                    </td>
                    <td>
                      <textarea id="seatsDisplay" defaultValue={""} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
      </>
    )
  }
}
