import React, { Component } from 'react'
import { connect } from "react-redux";
import { actSearchForm, actDeleteForm } from "../redux/actions";
import Modal from './Modal';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords: '',
            edituser: null,
        }
    }
    getedituser = (data) =>{
        this.setState(
            {
                edituser: data
            }
        );
    }
    renderList = () => {
        const { list, keywords } = this.props;
        const listFilter = list.filter((item) => {
            return item.masv.indexOf(keywords) !== -1;
        });
        return listFilter?.map((item, index) => {
            return (
                <tr key={index}>
                    <td className="col-2">
                        {item.masv}
                    </td>
                    <td className="col-3">
                        {item.fullname}
                    </td>
                    <td className="col-1">
                        {item.phone}
                    </td>
                    <td className="col-3">
                        {item.email}
                    </td>
                    <td className="col-2">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <button
                                        type="button"
                                        data-bs-toggle="modal" data-bs-target="#editForm"
                                        className="btn btn-primary w-100"
                                        onClick={() => this.getedituser(item)}
                                    >
                                        Edit
                                    </button>
                                </div>
                                <div className="col">
                                    <button
                                        type="button"
                                        className="btn btn-danger w-100"
                                        onClick={() => this.props.delete(item.masv)}
                                    >
                                        Xóa
                                    </button>
                                </div>

                            </div>
                        </div>
                    </td>
                </tr>
            );
        });
    };
    handleKeyWord = (event) => {
        const keyword = event.target.value;
        this.setState({ keywords: keyword });
    };
    componentDidUpdate() {
        const {keywords} = this.state;
        this.props.search(keywords);
    }

    render() {
        return (
            <>
                <div className="input-group rounded">
                    <input type="search" className="form-control rounded" onChange={this.handleKeyWord} placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <span className="input-group-text border-0 bg-primary" id="search-addon">
                        <i className="fas fa-search text-white" />
                    </span>
                </div>
                <br/>
                <div className="row container-fluid">
                    <table className="table text-center table-bordered" width="100%">
                        <tbody>
                            <tr>
                                <td className="col-2">Mã sinh viên</td>
                                <td className="col-3">Họ tên</td>
                                <td className="col-2">SĐT</td>
                                <td className="col-3">Email</td>
                                <td className="col-2">Action</td>
                            </tr>
                            {
                                this.renderList()
                            }
                        </tbody>
                    </table>
                </div>
               <Modal sendedituser={this.state.edituser}/> 
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.formReducer?.listSV,
        filter: state.formReducer?.listFilter,
        keywords: state.formReducer?.keywords
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        search: (data) => {
            dispatch(actSearchForm(data));
        },
        delete: (masv) => {
            dispatch(actDeleteForm(masv));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Table);