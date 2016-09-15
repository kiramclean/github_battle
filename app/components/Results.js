import React from 'react'
import { Link } from 'react-router'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'
import MainContainer from '../containers/MainContainer'
import Loading from './Loading'

const StartOver = () => {
  return(
    <div className='row' style={{justifyContent: 'center'}}>
      <Link to='/playerOne'>
        <button type='button'>Start Over</button>
      </Link>
    </div>
  )
}

const Results = (props) => {
  if (props.isLoading === true) {
    <MainContainer>
      <Loading />
    </MainContainer>
  }

  if (props.scores[0] === props.scores[1]) {
    return(
      <MainContainer>
        <h1>It's a tie!</h1>
        <StartOver />
      </MainContainer>
    )
  }

  let winningIndex = props.scores[0] > props.scores[1] ? 0 : 1
  let losingIndex = winningIndex === 0 ? 1 : 0
  return(
    <MainContainer>
      <h1>Results</h1>
      <div>
        <div className='row'>
          <UserDetailsWrapper header='Player 1'>
            <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header='Player 2'>
            <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
          </UserDetailsWrapper>
        </div>
      </div>
      <StartOver />
    </MainContainer>
  )
}

Results.PropTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  playersInfo: React.PropTypes.array.isRequired,
  scores: React.PropTypes.array.isRequired
}

export default Results
