import React from 'react'

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

const ConfirmBattle = (props) => {
  return(
    props.isLoading === true
      ? <p>LOADING</p>
      : <p>CONFIRM BATTLE {puke(props)}</p>
  )
}

export default ConfirmBattle
