import request from 'superagent'

const url = '/api'

//Client side GET for cube data with ratings
export function getCubes (callback) {
  request
    .get(url+'/cubes')
    .end((err, res) => { 
      callback(err, res.body)
    })
}

//Client side GET for cube data with ratings for a specified user ID
export function getCubesByUserId (callback, id) {
  request
    .get(url+'/cubes/'+id)
    .end((err, res) => { 
      callback(err, res.body)
    })
}

//Client side GET for users
export function getUsers (callback) {
  request
    .get(url+'/users')
    .end((err, res) => { 
      callback(err, res.body)
    })
}

//Client side POST for cube rating
export function addCubeRating (cubeRating) {
  cubeRating.rating = Number(cubeRating.rating)
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

//Client side POST for new user
export function addUser (newUser) {
  return request.post(url+'/users')
    .send(newUser)
    .catch(err => {
      throw Error('Cannot POST a new Post!')
    })
}