jest.mock('../request')

const github = require('../github')

// A simple example test
describe('#getUser() using Promises', () => {
  it('should load user data', () => {
    return github.getUser('vnglst')
    .then(data => {
      expect(data).toBeDefined()
      expect(data.entity.name).toEqual('blubblub')
    })
  })
})


// The exact same test using async/await
describe('#getUser() using async/await', () => {
  it('should load user data', async () => {
    const data = await github.getUser('vnglst')
    expect(data).toBeDefined()
    expect(data.entity.name).toEqual('blubblub')
  })
})