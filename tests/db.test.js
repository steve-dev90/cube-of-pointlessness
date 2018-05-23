// --FROM knex relationship stories -- //

const testEnv = require('./test-environment')
const db = require('../db/db')

let testDb = testEnv.getTestDb()

// Create a separate in-memory database before each test.
// In our tests, we can get at the database as `t.context.db`.
beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

// Destroy the database connection after each test.
afterEach(() => testEnv.cleanup(testDb))

test('test get users from DB', () => {

  //expected is equal to the first line of the DB
  var expected = { id: 991, name: 'Steve', email: 'test@test.com' } 
  //Don't forget about the return! 
  return db.getUsers(testDb)
    .then(users => {
      //console.log(users[0]) 
      expect(users[0]).toEqual(expected)    
    })
    .catch(err => {expect(err).toBeNull()})
       
})

test('test get cubes from DB', () => {
  
  var expected = { id: 661, name: 'Sine Cube', image: 'test.png', rating: 0 } 
  return db.getCubes2(testDb)
    .then(cubes => {
      console.log(cubes[0]) 
      //expected is equal to the first line of the DB
      
      expect(cubes[0]).toEqual(expected)    
    })
    .catch(err => {expect(err).toBeNull()})
       
})

test('test post new user', () => {
  var newTestUser = {'name': 'testUser', 'email': 'test@email' }
  //Expected result adds new user id 994 for seed database
  var expected = [994]

  return db.addNewUser(newTestUser, testDb)
    .then(res => {
      console.log(res) 
      expect(res).toEqual(expected)    
    })
    .catch(err => {expect(err).toBeNull()})
       
})


