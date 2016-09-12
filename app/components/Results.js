import React from 'react'

const Results = () => {
  return(
    <div>
      Results component
    </div>
  )
}

Results.PropTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  playersInfo: React.PropTypes.array.isRequired,
  scores: React.PropTypes.array.isRequired
}

export default Results
