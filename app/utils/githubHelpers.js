import axios from 'axios'

let token = 'TOKEN'
let param = `?access_token=${token}`

function getUserInfo (username) {
  return axios.get(`https://api.github.com/users/${username}${param}`)
}

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

  function getUserInfo (username) {
    return axios.get(`https://api.github.com/users/${username}${param}`)
  }

  battle() {

  }

  getRepos(username) {
    return axios.get(`https://api.github.com/users/${username}/repos/${param}&per_page=100`)
  }

  getTotalStars(repos) {

  }

  getPlayersData(player) {

  }

  calculateScores(players) {

  }
}

export default helpers
