import React, { Component } from 'react'
import ShoesItem from './ShoesItem'

export default class extends Component {
    render() {
        const { ShoesItem } = this.props
        return (
            <>
                <div className="col-md-12">
                    <div className="card ">
                        <div className=''>
                            <img className="card-img-top" src={ (ShoesItem?.image == null) ? "http://svcy3.myclass.vn/images/adidas-prophere.png" : ShoesItem.image } alt="Card image cap" />
                            <div className="card-body">
                                <b className="card-title">Name: {ShoesItem?.name}</b>
                                <p className="card-text">ShortDescription: {ShoesItem?.shortDescription}</p>
                                <p className="card-text">Description: {ShoesItem?.description}</p>

                                <p className="card-text">Quantity: {ShoesItem?.quantity}</p>
                                <b className="card-text">Price: {ShoesItem?.price}$</b>

                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}
