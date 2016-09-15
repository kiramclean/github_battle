import React from 'react'
import style from '../styles/index'

const MainContainer = (props) => {
  return(
    <div style={style.center}>
      {props.children}
    </div>
  )
}

export default MainContainer
