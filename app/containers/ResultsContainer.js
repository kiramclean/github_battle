import React from 'react'
import Results from '../components/Results'

export class ResultsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      scores: []
    }
  }

  render() {
    return (
      <Results
        isLoading={this.state.isLoading}
        scores={this.state.scores}
        playersInfo={this.props.location.state.playersInfo} />
    )
  }

  componentDidMount() {
    console.log(this.props.location.state.playersInfo)
    githubHelpers.battle(this.props.location.state.playersInfo)
      .then(function(scores) {
        this.setState(() => {
          scores: scores,
          isLoading: false
        })
      })
  }
}

export default ResultsContainer
