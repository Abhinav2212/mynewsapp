import React, { Component } from 'react'
import NavBar from './compenents/NavBar'
import News from './compenents/News'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News pageSize = {5} country = "in" category = "sports"/>
      </div>
    )
  }
}
