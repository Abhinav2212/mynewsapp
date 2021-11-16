import React, { Component } from 'react'
import NavBar from './compenents/NavBar'
import News from './compenents/News'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  onePageSize = 20
  render() {
    return (
      <BrowserRouter>
        <NavBar />  

        <Routes>
          <Route exact path="/"  element={<News pageSize={this.onePageSize} key="general" country="in" category="general" />} />
          <Route exact path="sports"  element={<News pageSize={this.onePageSize} key="sports" country="in" category="sports" />} />
          <Route exact path="business"  element={<News pageSize={this.onePageSize} key="business" country="in" category="business" />} />
          <Route exact path="entertainment"  element={<News pageSize={this.onePageSize} key="entertainment" country="in" category="entertainment" />} />
          <Route exact path="health"  element={<News pageSize={this.onePageSize} key="health" country="in" category="health" />} />
          <Route exact path="science"  element={<News pageSize={this.onePageSize} key="science" country="in" category="science" />} />
          <Route exact path="technology" element={<News pageSize={this.onePageSize} key="technology" country="in" category="technology" />} />



        </Routes>
      </BrowserRouter>

    )
  }
}
