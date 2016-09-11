import React from 'react'
import ReactDOM from 'react-dom'

export class HelloWorld extends React.Component  {
  render() {
      console.log(this.props)
    return (
      <section class='container'>HelloReCT!!!</section>
    )
  }
}

ReactDOM.render(
  <HelloWorld name="Kira" otherData={30} />,
  document.getElementById('app')
)
