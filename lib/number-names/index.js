module.exports = number => {
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
