import axios from 'axios'

let token = 'TOKEN'
let param = `?access_token=${token}`

const helpers = {
  getPlayersInfo(usernames) {
    return axios.all(usernames.map(function (username) {
      return getUserInfo(username)
    })).then(function (info) {
      return info.map(function(user) {
        return user.data
      })
    }).catch(function (error) {
      console.warn('Error in getPlayersInfo: ', error)
    })
  },

  battle(players) {
    var playerOneData = getPlayersData(players[0])
    var playerTwoData = getPlayersData(players[1])
    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function(error) {
        console.warn('Error in getPlayersInfo: ', error)
      })
  }
}

function getUserInfo (username) {
  return axios.get(`https://api.github.com/users/${username}${param}`)
}

function getPlayersData(player) {
  return getRepos(player.login)
  .then(getTotalStars)
  .then(function(totalStars) {
    return {
      followers: player.followers,
      totalStars: totalStars
    }
  })
}

function getRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos${param}&per_page=100`)
}

function getTotalStars(repos) {
  return repos.data.reduce(function(prev, current) {
    return prev + current.stargazers_count
  }, 0)
}

function calculateScores(players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

export default helpers
