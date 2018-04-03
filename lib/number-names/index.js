module.exports = number => {
  if (number === 1) {
    return 'one'
  }
  if (number === 2) {
    return 'two'
  }
  if (number === 3) {
    return 'three'
  }
  if (number === 4) {
    return 'four'
  }
  if (number === 5) {
    return 'five'
  }
  if (number === 6) {
    return 'six'
  }
  if (number === 7) {
    return 'seven'
  }
  if (number === 8) {
    return 'eight'
  }
  if (number === 9) {
    return 'nine'
  }
  if (number.toString().length <= 3) {
    // work out the hundreds
    return 'hundreds'
  }
  if (number.toString().length > 3 && number.toString().length <= 6) {
    // work out the thousands
    return 'thousands'
  }
  if (number.toString().length > 6) {
    // work out the millions
    return 'millions'
  }
  return false
}
