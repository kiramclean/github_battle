import React from 'react'
import { Link } from 'react-router'
import style from '../styles/index.js'

export class Home extends React.Component {
  render() {
    return (
      <div
        style={style.center}>
        <h1>Github Battle</h1>
        <p>Motto goes here</p>
        <Link to='/playerOne'>
          <button type='button'>Get Started</button>
        </Link>
      </div>
    )
  }
}

export default Home
