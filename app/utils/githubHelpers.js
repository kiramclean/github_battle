import axios from 'axios'

let id = 'CLIENT_ID'
let secret = 'SECRET_ID'
let param = `?client_id${id}&client_secret=${secret}`

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
}

export default helpers
