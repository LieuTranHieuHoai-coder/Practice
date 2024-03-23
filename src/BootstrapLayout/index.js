import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
export default class Layout extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </>
    )
  }
}
