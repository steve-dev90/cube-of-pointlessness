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

// export function addCubeRating (cubeRating, callback) {
//   cubeRating.rating = Number(cubeRating.rating)
//   console.log('api',cubeRating)
//   request
//     .post(url+`/cubes/${cubeRating.cube_id}`)
//     .send(cubeRating)
//     .end((err, res) => {
//         console.log('HeLLLOOOO')
//         callback()
//     })
// }

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
