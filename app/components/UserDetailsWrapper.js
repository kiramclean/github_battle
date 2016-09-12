import React from 'react'

const UserDetailsWrapper = (props) => {
  return(
    <div className='column'>
      <h2>{props.header}</h2>
      {props.children}
    </div>
  )
}

UserDetailsWrapper.propTypes = {
  header: React.PropTypes.string.isRequired
}

export default UserDetailsWrapper
