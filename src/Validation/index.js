import React, { Component } from "react";
import { connect } from "react-redux";
import { actAddForm } from "../redux/actions";
class Validation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        id: "",
        masv: "",
        fullname: "",
        phone: "",
        email: "",
      },
      errors: {
        id: "",
        masv: "",
        fullname: "",
        phone: "",
        email: "",
      },
    };
  }

  handleOnchange = (event) => {
    const { name, value, pattern } = event.target;
    console.log("pattern", name, pattern);
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
    let isValid = true;
    let newErrors = { ...this.state.errors };
    let newValues = { ...this.state.values };
    if (newValues.fullname === "") {
      newErrors.fullname = "Vui lòng nhập họ tên";
      isValid = false;
    }
    if (newValues.phone === "") {
      newErrors.phone = "Vui lòng nhập số điện thoại";
      isValid = false;
    }
    if (newValues.email === "") {
      newErrors.email = "Vui lòng nhập email";
      isValid = false;
    }
    if (newValues.masv === "") {
      newErrors.masv = "Vui lòng nhập mã sinh viên";
      isValid = false;
    }
    this.setState({ errors: newErrors });

    Object.values(this.state.errors).forEach((item) => {
      if (item) {
        isValid = false;
      }
    });

    if (isValid) {
      console.log("values", this.state.values);
      this.props.add(this.state.values);
    }
  };

  renderList = () => {
    const { list } = this.props;
    return list.map((item, index) => {
      return (
        <tr key={index}>
          <td className="td col-md-1" key={index}>
            {index + 1}
          </td>
          <td className="td col-md-3" key={index}>
            {item.masv}
          </td>
          <td className="td col-md-3" key={index}>
            {item.fullname}
          </td>
          <td className="td col-md-1" key={index}>
            {item.phone}
          </td>
          <td className="td col-md-3" key={index}>
            {item.email}
          </td>
          <td className="td col-md-1" key={index}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.props.delete(item.id)}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    const { errors } = this.state;
    return (
      <>
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-left m-auto">
              <div class="card" style={{ padding: 20 }}>
                <h3 className="text-center">Thêm sinh viên</h3>
                <form onSubmit={this.handleSubmit} className="form-card row">
                  <div className="form-group col-sm-6">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Nhập email"
                      name="email"
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
                      placeholder="Nhập Masv"
                      name="masv"
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
                      pattern="^(03|05|07|08|09)\d{8}$"
                      name="phone"
                      onChange={this.handleOnchange}
                      onBlur={this.handleOnchange}
                    />
                    {errors.phone && (
                      <span className="text text-danger">{errors.phone}</span>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary mt-2"
                    onClick={this.handleSubmit}
                  >
                    Thêm sinh viên
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div class="row container-fluid">
            <table className="table text-center table-bordered" width="100%">
              <tbody>
                <tr>
                  <td className="td col-md-1">STT</td>
                  <td className="td col-md-3">Mã sinh viên</td>
                  <td className="td col-md-3">Họ tên</td>
                  <td className="td col-md-1">SĐT</td>
                  <td className="td col-md-3">Email</td>
                  <td className="td col-md-1">Action</td>
                </tr>
                {
                  this.renderList()
                }
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.formReducer?.listSV,
    filter: state.formReducer?.listFilter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (data) => {
      dispatch(actAddForm(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Validation);
