import React from 'react'
import style from '../styles/index'
import { Link } from 'react-router'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

const ConfirmBattle = (props) => {
  return(
    props.isLoading === true
      ? <div style={style.center}><h1>LOADING...</h1></div>
      : <div style={style.center}>
          <h1>Confirm Players</h1>
          <div className='row'>
            <UserDetailsWrapper header='Player 1'>
              <UserDetails info={props.playersInfo[0]} />
            </UserDetailsWrapper>
            <UserDetailsWrapper header='Player 2'>
              <UserDetails info={props.playersInfo[1]} />
            </UserDetailsWrapper>
          </div>
          <div className='row' style={{justifyContent: 'center'}}>
            <button type='button'>Initiate Battle</button>
          </div>
          <div className='row' style={{justifyContent: 'center'}}>
            <Link to='/playerOne'>
              <button type='button'>
                Link to /playerone
              </button>
            </Link>
          </div>
        </div>

  )
}

ConfirmBattle.PropTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  playersInfo: React.PropTypes.array.isRequired,
  onInitiateBattle: React.PropTypes.func.isRequired
}

export default ConfirmBattle
