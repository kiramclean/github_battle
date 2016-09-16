import React from 'react'
import { Link } from 'react-router'
import style from '../main.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export class Main extends React.Component {
  render() {
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName='appear'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default Main
