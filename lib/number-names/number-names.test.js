const numberNames = require('./index')

describe('number names', () => {
  it('works out the thousands if the number is between 1000 and 999999', () => {
    expect(numberNames(123456)).toEqual('123 thousand 4 hundred and 5 six')
  })

  it('works out the millions if the number is greater than 999999', () => {
    expect(numberNames(1234567)).toEqual('millions')
  })

  it('should return fifty three if the number is 53', () => {
    expect(numberNames(53)).toEqual('fifty three')
  })

  it('should return three if the number is 3', () => {
    expect(numberNames(3)).toEqual('three')
  })
})
