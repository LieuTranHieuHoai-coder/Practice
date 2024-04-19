import React, { Component } from "react";
import Form from "./Form";
import Table from "./table";
class Validation extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-left m-auto">
              <div className="card" style={{ padding: 20 }}>
                <h3 className="text-center">Thêm sinh viên</h3>
                  <Form/>
              </div>
            </div>
          </div>
          <br />
          <Table/>
        </div>
      </>
    );
  }
}

export default Validation;
