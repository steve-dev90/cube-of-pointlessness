import request from 'superagent'

const url = '/api'

export function getCubes (callback) {
  request
    .get(url+'/cubes')
    .end((err, res) => {
      //console.log('get', res.body)  
      callback(err, res.body)
    })
}

export function getCubesByUserId (callback, id) {
  //var u = url+'/cubes/'
  console.log('api',id)
  request
    .get(url+'/cubes/'+id)
    .end((err, res) => {
      //console.log('get', res.body)  
      callback(err, res.body)
    })
}

export function getUsers (callback) {
  //console.log('getusers')
  request
    .get(url+'/users')
    .end((err, res) => {
      //console.log('get', res.body)  
      callback(err, res.body)
    })
}

export function addCubeRating (cubeRating) {
  cubeRating.rating = Number(cubeRating.rating)
  console.log('api',cubeRating)
  return request.post(url+`/cubes/${cubeRating.cube_id}`)
    .send(cubeRating)
    // .then(data => {
    //   const returnedPost = data.body
    //   return returnedPost
    // })
    .catch(err => {
      throw Error('Cannot POST a new Post!')
    })
}

export function addUser (newUser) {

  console.log('api',newUser)
  return request.post(url+'/users')
    .send(newUser)
    .catch(err => {
      throw Error('Cannot POST a new Post!')
    })
}