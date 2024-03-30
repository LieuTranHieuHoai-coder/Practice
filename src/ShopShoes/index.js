import React, { Component } from 'react'
import Header from './Header';
import ListShoes from './ListShoes';
import Modal from './Modal';
import data from './data.json';

export default class ShopShoes extends Component {
    constructor(params) {
        super(params);
        this.state = {
            listshoes: data,
            details: null,
            listcart: []
        }
    }

    getItem = (data) => {
        this.setState({ details: data });
    }
    render() {
        return (
            <>
                <div className='container '>
                    <div className='row'>
                        <div className='col-md-3'>
                            <Modal ShoesItem={this.state.details}/>
                        </div>
                        <div className='col-md-9'  style={{height:'100vh', overflow:'auto'}}>
                            <Header></Header>
                            <ListShoes listshoes={this.state.listshoes} getItem={this.getItem}></ListShoes>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
