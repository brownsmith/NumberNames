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
  it('should return eighty one if the number is 81', () => {
    expect(numberNames(81)).toEqual('eighty one')
  })
  it('should return sixteen if the number is 16', () => {
    expect(numberNames(16)).toEqual('sixteen')
  })
  it('should return three if the number is 3', () => {
    expect(numberNames(3)).toEqual('three')
  })
  it('should return twenty if the number is 20', () => {
    expect(numberNames(20)).toEqual('twenty')
  })
  it('should return hundred if the number is 100', () => {
    expect(numberNames(100)).toEqual('hundred')
  })
  it('should return ten if the number is 10', () => {
    expect(numberNames(10)).toEqual('ten')
  })
})
