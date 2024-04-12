import React, { Component } from 'react'
import { connect } from 'react-redux';


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
                        <button className='btn btn-danger'>Hủy</button>
                    </td>
                </tr>
            )
        })
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

export default connect(mapStateToProps, null)(Table);