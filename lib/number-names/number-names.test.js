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
  it('should return thirty two if the number is 32', () => {
    expect(numberNames(32)).toEqual('thirty two')
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
  it('should return ten if the number is 10', () => {
    expect(numberNames(10)).toEqual('ten')
  })
  it('should return twelve if the number is 12', () => {
    expect(numberNames(12)).toEqual('twelve')
  })
  it('should return one hundred and twenty three if the number is 123', () => {
    expect(numberNames(123)).toEqual('one hundred and twenty three')
  })
  it('should return five hundred and seventy seven if the number is 577', () => {
    expect(numberNames(577)).toEqual('five hundred and seventy seven')
  })
  it('should return three hundred and seventeen if the number is 317', () => {
    expect(numberNames(317)).toEqual('three hundred and seventeen')
  })
  it('should return one hundred and eleven if the number is 111', () => {
    expect(numberNames(111)).toEqual('one hundred and eleven')
  })
  it('should return seven thousand four hundred and fifty five if the number is 7455', () => {
    expect(numberNames(7455)).toEqual('seven thousand four hundred and fifty five')
  })
})
