import React from 'react'
import style from '../styles/index'

const Prompt = (props) => {
  return (
    <div
      style={style.center}>
      <h1>{props.header}</h1>
      <form onSubmit={props.onSubmitUser}>
        <input
          className='row'
          placeholder="Github Username"
          type="text"
          onChange={props.onUpdateUser}
          value={props.username} />
        <button
          type='submit'>
          Continue
        </button>
      </form>
    </div>
  )
}

Prompt.propTypes = {
  header: React.PropTypes.string.isRequired,
  onUpdateUser: React.PropTypes.func.isRequired,
  onSubmitUser: React.PropTypes.func.isRequired,
  username: React.PropTypes.string.isRequired
}

export default Prompt
