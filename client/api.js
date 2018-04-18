import request from 'superagent'

const url = '/api'

export function getCubes (callback) {
  request
    .get(url+'/cubes')
    .end((err, res) => {
      console.log('get', res.body)  
      callback(err, res.body)
    })
}