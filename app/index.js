import React from 'react'
import ReactDOM from 'react-dom'

var USER_DATA = {
  name: "Kira McLean",
  username: "kiramclean",
  imageUrl: "https://avatars2.githubusercontent.com/u/11531673?v=3&s=460"
}

export class ProfilePic extends React.Component {
  render() {
    return (
      <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
    )
  }
}

export class ProfileLink extends React.Component {
  render() {
    return (
      <div>
        <a href={`https://github.com/${this.props.username}`}>
          {this.props.username}
        </a>
      </div>
    )
  }
}

export class ProfileName extends React.Component {
  render() {
    return (
      <div>{this.props.name}</div>
    )
  }
}

export class Avatar extends React.Component {
  render() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.imageUrl} />
        <ProfileLink username={this.props.user.username} />
        <ProfileName name={this.props.user.name} />
      </div>
    )
  }
}

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
)
