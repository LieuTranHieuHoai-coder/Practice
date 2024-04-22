import React, { Component } from "react";
import { connect } from "react-redux";
import { actEditForm } from "../redux/actions";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edituser: null,
      values: {
        id: "",
        masv: "",
        fullname: "",
        phone: "",
        email: "",
      },
      errors: {
        masv: "",
        fullname: "",
        phone: "",
        email: "",
      },
    };
  }

  handleOnchange = (event) => {
    const { name, value, pattern } = event.target;
    const newValues = { ...this.state.values, [name]: value };
    let newErrors = { ...this.state.errors };
    if (!value.trim()) {
      switch (name) {
        case "fullname": {
          newErrors.fullname = "Vui lòng nhập họ tên";
          break;
        }
        case "phone": {
          newErrors.phone = "Vui lòng nhập số điện thoại";
          break;
        }
        case "email": {
          newErrors.email = "Vui lòng nhập email";
          break;
        }
        case "masv": {
          newErrors.masv = "Vui lòng nhập mã sinh viên";
          break;
        }
        default:
          break;
      }
    } else {
      if (pattern) {
        const regex = new RegExp(pattern);
        const valid = regex.test(value);
        if (!valid) {
          newErrors[name] = `${name} không đúng định dạng`;
        } else {
          newErrors[name] = "";
        }
      } else {
        if (value.length <= 4) {
          newErrors[name] = "Độ dài quá ngắn";
        } else {
          newErrors[name] = "";
        }
      }
    }
    this.setState({ values: newValues, errors: newErrors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const index = this.props.list.findIndex(
      (item) => item.masv === this.state.values.masv
    );
    if (index !== -1) {
      alert("Mã sinh viên đã tồn tại");
    } else {
      this.props.editFormData(this.state.values);
    }
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    const { sendedituser } = nextProps;
    this.setState({
      values: {
        id: sendedituser.id,
        masv: sendedituser.masv,
        fullname: sendedituser.fullname,
        phone: sendedituser.phone,
        email: sendedituser.email,
      },
    });
  }

  render() {
    const { errors, values } = this.state;

    return (
      <>
        <div
          className="modal fade"
          id="editForm"
          tabIndex={-1}
          aria-labelledby="editFormLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={this.handleSubmit} className="form-card">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="editFormLabel">
                    Edit User
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body row">
                  <div className="form-group col-sm-6">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Nhập email"
                      name="email"
                      value={values?.email}
                      onChange={this.handleOnchange}
                      onBlur={this.handleOnchange}
                    />
                    {errors.email && (
                      <span className="text text-danger">{errors.email}</span>
                    )}
                  </div>
                  <div className="form-group col-sm-6 ">
                    <label htmlFor="exampleInputMasv">Mã sinh viên</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputMasv"
                      aria-describedby="emailHelp"
                      placeholder="Nhập mã sinh viên"
                      name="masv"
                      value={values?.masv}
                      onChange={this.handleOnchange}
                      onBlur={this.handleOnchange}
                    />
                    {errors.masv && (
                      <span className="text text-danger">{errors.masv}</span>
                    )}
                  </div>
                  <div className="form-group col-sm-6 ">
                    <label htmlFor="exampleInputFullname">Họ Tên</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputFullname"
                      name="fullname"
                      value={values?.fullname}
                      placeholder="Nhập họ tên"
                      onChange={this.handleOnchange}
                      onBlur={this.handleOnchange}
                      min={4}
                    />
                    {errors.fullname && (
                      <span className="text text-danger">
                        {errors.fullname}
                      </span>
                    )}
                  </div>
                  <div className="form-group col-sm-6 ">
                    <label htmlFor="exampleInputPhone">Số điện thoại</label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputPhone"
                      placeholder="Nhập SÐT"
                      value={values?.phone}
                      pattern="^(03|05|07|08|09)\d{8}$"
                      name="phone"
                      onChange={this.handleOnchange}
                      onBlur={this.handleOnchange}
                    />
                    {errors.phone && (
                      <span className="text text-danger">{errors.phone}</span>
                    )}
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    data-bs-dismiss="modal"
                    className="btn btn-primary"
                    onClick={this.handleSubmit}
                  >
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.formReducer?.listSV,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    editFormData: (data) => dispatch(actEditForm(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
