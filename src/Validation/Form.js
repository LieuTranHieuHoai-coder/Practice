import React, { Component } from 'react'
import { connect } from "react-redux";
import { actAddForm } from "../redux/actions";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
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
            keywords: "",
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
        let isValid = true;
        const { list } = this.props;
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
            const index = list.findIndex((item) => item.masv === this.state.values.masv);
            if (index !== -1) {
                alert("Mã sinh viên đã toàn tại");
            } else {
                this.props.add(this.state.values);
            }


        }
    };
    render() {
        const { errors } = this.state;
        return (
            <>
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
                            placeholder="Nhập mã sinh viên"
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
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.formReducer?.listSV,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        add: (data) => {
            dispatch(actAddForm(data));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);