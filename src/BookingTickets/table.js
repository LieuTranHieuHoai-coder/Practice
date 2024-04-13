import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actAdd, actDelete } from './../redux/actions';

class Table extends Component {
    renderTable = () => {
        const { showTable } = this.props;
        return showTable?.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{index}</td>
                    <td>{item.soGhe}</td>
                    <td>{item.gia}</td>
                    <td>
                        <button className='btn btn-danger' onClick={() => this.props.Delete(item)}>Hủy</button>
                    </td>
                </tr>
            )
        })
    }
    renderTotal = () => {
        const { showTable } = this.props;
        const totalPrice = showTable.reduce((total, item) => total + item.gia, 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        console.log(totalPrice);
        return (
            <tr>
                <td colSpan="4" >{totalPrice} VNĐ</td> 
            </tr>
        )
    }
    render() {

        return (
            <>
                <div className="col-md-4">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Số Ghế</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Hủy</th>
                            </tr>
                        </thead>


                        <tbody>
                            {
                                this.renderTable()
                            }
                            {
                                this.renderTotal()
                            }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showTable: state.ticketReducer.listSelected,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        Add: (data) => { dispatch(actAdd(data)) },
        Delete: (data) => { dispatch(actDelete(data)) },
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);