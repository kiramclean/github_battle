import React from 'react'

const UserDetails = (user) => {
  return (
    <div>
      {!!user.score && <p><h3>Score: {user.score}</h3></p>}
      <p><img src={user.info.avatar_url}/></p>
      {user.info.name && <p>Name: {user.info.name}</p>}
      <p>Username: {user.info.login}</p>
      {user.info.location && <p>Location: {user.info.location}</p>}
      {user.info.company && <p>Company: {user.info.company}</p>}
      <p>Followers: {user.info.followers}</p>
      <p>Following: {user.info.following}</p>
      <p>Public Repos: {user.info.public_repos}</p>
      {user.info.blog && <p>Blog: <a href={user.info.blog}>{user.info.blog}</a></p>}
    </div>
  )
}

UserDetails.propTypes = {
  score: React.PropTypes.number,
  info: React.PropTypes.shape({
    avatar_url: React.PropTypes.string.isRequired,
    blog: React.PropTypes.string,
    company: React.PropTypes.string,
    followers: React.PropTypes.number.isRequired,
    following: React.PropTypes.number.isRequired,
    location: React.PropTypes.string,
    login: React.PropTypes.string.isRequired,
    name: React.PropTypes.string,
    public_repos: React.PropTypes.number.isRequired,
  })
}

export default UserDetails
