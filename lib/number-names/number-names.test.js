const numberNames = require('./index')

describe('number names', () => {
  it('returns single numbers by returning "seven" for the number 7', () => {
    expect(numberNames(7)).toEqual('seven')
  })

  it('works out the hundreds if the number is between 0 and 999', () => {
    expect(numberNames(123)).toEqual('hundreds')
  })

  it('works out the thousands if the number is between 1000 and 999999', () => {
    expect(numberNames(123456)).toEqual('thousands')
  })

  it('works out the millions if the number is greater than 999999', () => {
    expect(numberNames(1234567)).toEqual('millions')
  })
})
