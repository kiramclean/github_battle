import React from 'react'
import style from '../styles/index'
import { Link } from 'react-router'

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

const ConfirmBattle = (props) => {
  return(
    props.isLoading === true
      ? <p>LOADING !</p>
      : <div style={style.center}>
          <h1>Confirm Players</h1>
          <div className='row'>
            <div className='column'>
              <h2>Player 1 Info</h2>
              Player 1 INFO
            </div>
            <div className='column'>
              <h2>Player 2 Info</h2>
              Player 2 info
            </div>
          </div>
          <button type='button'>Initiate Battle</button>
          <Link to='/playerOne'>
            <button type='button'>
              Link to /playerone
            </button>
          </Link>
        </div>

  )
}

ConfirmBattle.PropTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  playersInfo: React.PropTypes.array.isRequired,
  onInitiateBattle: React.PropTypes.func.isRequired
}

export default ConfirmBattle
