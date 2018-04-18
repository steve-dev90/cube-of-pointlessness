import request from 'superagent'

const url = 'http://localhost:3000/api'

export function getCubes (callback) {
  request
    .get(url+'/cubes')
    .end((err, res) => {
      callback(err, res.body)
    })
}