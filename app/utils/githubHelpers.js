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
  }

  getUserInfo (username) {
    return axios.get(`https://api.github.com/users/${username}${param}`)
  }

  battle() {
    let playerOneData = getPlayersData(player[0])
    let playerTwoData = getPlayersData(player[1])

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(funciton(error) {
        console.warn('Error in getPlayersInfo: ', error)
      })
  }

  getPlayersData(player) {
    return getRepos(player.login)
      .then(getTotalStars)
      .then(function(totalStars) {
        return {
          followers: player.followers,
          totalStars: totalStars
        }
      })
  }


  getRepos(username) {
    return axios.get(`https://api.github.com/users/${username}/repos/${param}&per_page=100`)
  }

  getTotalStars(repos) {
    return repos.data.reduce(function(prev, current) {
      return prev + current.stargazers_count
    }, 0)
  }

  calculateScores(players) {
    return [
      players[0].followers * 3 + players[0].totalStars,
      players[1].followers * 3 + players[1].totalStars,
    ]
  }
}

export default helpers
