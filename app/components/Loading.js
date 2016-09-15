import React from 'react'

export class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      originalText: this.props.text,
    }
  }

  componentDidMount() {
    this.setState({
      text: this.state.originalText
    })

    let stopper = `${this.state.originalText}...`
    this.interval = setInterval(() => {
      if (this.state.text === stopper) {
        this.setState({
          text: this.state.originalText
        })
      } else {
        this.setState({
          text: `${this.state.text}.`
        })
      }
    }, this.props.speed)
  }

  render() {
    return (
      <div className='row'>
        <p>{this.state.text}</p>
      </div>
    )
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
}

Loading.PropTypes = {
  text: React.PropTypes.string,
  speed: React.PropTypes.number
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
}

export default Loading
