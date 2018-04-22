import { Z_DATA_ERROR } from 'zlib';

/* global test beforeEach afterEach expect */

// --FROM knex relationship stories -- //

//const server = require('../server')
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
  
  db.getUsers(testDb)
    .then(users => {
      console.log(users[0]) 
      //expected is equal to the first line of the DB
      var expected = { id: 992, name: 'Steve', email: 'test@test.com' } 
      expect(users[0]).toBe(expected)    
    })
    .catch(err => console.log(err))
       
})
