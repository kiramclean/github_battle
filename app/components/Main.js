import React from 'react'
import { Link } from 'react-router'

export class Main extends React.Component {
  render() {
    return (
      <div>
        Main component
        <Link to='/home'>Home</Link>
        {this.props.children}
      </div>
    )
  }
}

export default Main
