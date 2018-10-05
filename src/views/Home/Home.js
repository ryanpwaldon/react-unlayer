import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Link to="/create">
          <div className="button-item">Start EDM builder</div>
        </Link>
      </div>
    )
  }
}

export default Home
