import React, { Component } from 'react'
import ShoesItem from './ShoesItem'

export default class ListShoes extends Component {
    renderShoesItem() {
        return this.props.listshoes.map((item) => {
            return (
                <ShoesItem ShoesItem={item} key={item.id} GetShoesItem={this.GetItem}/>
            )
        })
    }
    GetItem = (data) => {
        this.props.getItem(data);
    }
  render() {
    return (
      <>
        <div class="container">
            <div class="row g-2">
                {
                    this.renderShoesItem()
                }
            </div>
        </div>
      </>
    )
  }
}
