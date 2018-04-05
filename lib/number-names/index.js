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

  const getThousands = numbertoprocess => {
    const numberToString = numbertoprocess.toString()
    const sliceNum = numberToString.slice(0, 3)
    const restOfTheNumber = numberToString.slice(3, 6)
    return `${sliceNum} thousand ${restOfTheNumber}`
  }

  if (number.toString().length > 3 && number.toString().length <= 6) {
    // work out the thousands
    return getThousands(number)
  }
  if (number.toString().length > 6) {
    // work out the millions
    return 'millions'
  }
  return false
}
