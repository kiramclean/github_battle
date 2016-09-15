import React from 'react'

function dump (obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

const Results = (props) => {
  return(
    <div>
      {dump(props)}
    </div>
  )
}

Results.PropTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  playersInfo: React.PropTypes.array.isRequired,
  scores: React.PropTypes.array.isRequired
}

export default Results
