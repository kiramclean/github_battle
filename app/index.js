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

export class Link extends React.Component {
  constructor() {
    super()
    this.changeURL = this.changeURL.bind(this)
  }

  changeURL() {
    window.location.replace(this.props.href)
  }

  render() {
    return (
      <span
        style={{color: 'blue', cursor: 'pointer'}}
        onClick={this.changeURL}>
        {this.props.children}
      </span>
    )
  }
}

export class ProfileLink extends React.Component {
  render() {
    return (
      <div>
        <Link href={`https://github.com/${this.props.username}`}>
          {this.props.username}
        </Link>
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
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
}

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
)
