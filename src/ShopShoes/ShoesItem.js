import React, { Component } from 'react'

export default class ShoesItem extends Component {
    sendItem = () => {
        this.props.GetShoesItem(this.props.ShoesItem);
    }
    render() {
        const { ShoesItem } = this.props;
        return (
            <>
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src={ShoesItem.image} alt="Card image cap" />
                        <div className="card-body">
                            <b className="card-title">{ShoesItem.name}</b>
                            <p className="card-text">{ShoesItem.price}$</p>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <button className="btn btn-primary">Add to cart</button>
                                    </div>
                                    <div className="col-md-6">
                                        <button className="btn btn-secondary" onClick={this.sendItem}>Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </>


        )
    }
}
