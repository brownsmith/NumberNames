module.exports = number => {
  const returnSingle = singleNumber => {
    if (singleNumber === '1') {
      return 'one'
    }
    if (singleNumber === '2') {
      return 'two'
    }
    if (singleNumber === '3') {
      return 'three'
    }
    if (singleNumber === '4') {
      return 'four'
    }
    if (singleNumber === '5') {
      return 'five'
    }
    if (singleNumber === '6') {
      return 'six'
    }
    if (singleNumber === '7') {
      return 'seven'
    }
    if (singleNumber === '8') {
      return 'eight'
    }
    if (singleNumber === '9') {
      return 'nine'
    }
    return ''
  }

  const tens = tennumber => {
    if (tennumber === '2') {
      return 'twenty'
    }
    if (tennumber === '3') {
      return 'thirty'
    }
    if (tennumber === '4') {
      return 'forty'
    }
    if (tennumber === '5') {
      return 'fifty'
    }
    if (tennumber === '6') {
      return 'sixty'
    }
    if (tennumber === '7') {
      return 'seventy'
    }
    if (tennumber === '8') {
      return 'eighty'
    }
    if (tennumber === '9') {
      return 'ninety'
    }
    return ''
  }

  const returnTeens = doubleNumber => {
    if (doubleNumber === '11') {
      return 'eleven'
    }
    if (doubleNumber === '12') {
      return 'twelve'
    }
    if (doubleNumber === '13') {
      return 'thirteen'
    }
    if (doubleNumber === '14') {
      return 'fourteen'
    }
    if (doubleNumber === '15') {
      return 'fifteen'
    }
    if (doubleNumber === '16') {
      return 'sixteen'
    }
    if (doubleNumber === '17') {
      return 'seventeen'
    }
    if (doubleNumber === '18') {
      return 'eighteen'
    }
    if (doubleNumber === '19') {
      return 'nineteen'
    }
    return 'ten'
  }

  const numberAsString = number.toString()

  let hundredsArray = []

  const doubleNumber = doublenumber => {
    if (doublenumber.split('')[0] === '1') {
      const doubleDigitNumber = doublenumber.split('')[0] + doublenumber.split('')[1]
      return returnTeens(doubleDigitNumber)
    }
    if (doublenumber.split('')[1] === '0') {
      return tens(doublenumber.split('')[0])
    }
    const dec = tens(doublenumber.split('')[0], 10)
    const single = returnSingle(doublenumber.split('')[1])
    return `${dec} ${single}`
  }

  const getHundreds = hundredsNumber => {
    if (hundredsNumber.length === 1) {
      const single = returnSingle(hundredsNumber.split('')[0])
      return `${single}`
    }

    if (hundredsNumber.length === 2) {
      const double = doubleNumber(hundredsNumber)
      return `${double}`
    }

    const single1 = returnSingle(hundredsNumber.split('')[2])
    const double1 = doubleNumber(hundredsNumber.split('')[1])
    const hundreds1 = returnSingle(hundredsNumber.split('')[0]) // if this is a zero, just do the
    if (hundredsNumber.split('')[1] === '1') {
      const teenNumber = doubleNumber(hundredsNumber.split('')[1] + hundredsNumber.split('')[2])
      return `${hundreds1} hundred and ${teenNumber}`
    }
    return `${hundreds1} hundred and ${double1}${single1}`
  }

  const getThousands = numbertoprocess => {
    const numberToString = numbertoprocess.toString()
    const sliceNum = numberToString.slice(0, 3) // 123
    const restOfTheNumber = numberToString.slice(3, 6) // 456
    hundredsArray = restOfTheNumber.split('')
    const singleDigit = returnSingle(hundredsArray[2])
    const doubleDigit = hundredsArray[1]
    const hundred = hundredsArray[0]
    return `${sliceNum} thousand ${hundred} hundred and ${doubleDigit} ${singleDigit}`
  }

  if (numberAsString.length <= 3) {
    return getHundreds(numberAsString)
  }

  if (numberAsString.length > 3 && numberAsString.length <= 6) {
    // work out the thousands
    return getThousands(numberAsString)
  }
  if (numberAsString.length > 6) {
    // work out the millions
    return 'millions'
  }
  return false
}
