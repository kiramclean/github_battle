import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'

export class ConfirmBattleContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      playerInfo: []
    }
  }

  componentDidMount() {
    let query = this.props.location.query
    console.log('QUERY', query)
    // fetch info from github then update state
  }

  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo} />
    )
  }
}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default ConfirmBattleContainer
