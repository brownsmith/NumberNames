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
    return 'zero'
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
    return 'ten'
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

  const getHundreds = hundredsNumber => {
    if (hundredsNumber.length === 1) {
      const single = returnSingle(hundredsNumber.split('')[0])
      return `${single}`
    }

    if (hundredsNumber.length === 2) {
      if (hundredsNumber.split('')[0] === '1') {
        const doubleDigitNumber = hundredsNumber.split('')[0] + hundredsNumber.split('')[1]
        return returnTeens(doubleDigitNumber, 10)
      }
      if (hundredsNumber.split('')[1] === '0') {
        return tens(hundredsNumber.split('')[0])
      }
      const dec = tens(hundredsNumber.split('')[0], 10)
      const single = returnSingle(hundredsNumber.split('')[1])
      return `${dec} ${single}`
    }
    if (hundredsNumber.length === 3) {
      return 'hundred'
    }
  }

  const getThousands = numbertoprocess => {
    const numberToString = numbertoprocess.toString()
    const sliceNum = numberToString.slice(0, 3) // 123
    const restOfTheNumber = numberToString.slice(3, 6) // 456
    hundredsArray = restOfTheNumber.split('')
    const singleDigit = returnSingle(parseInt(hundredsArray[2], 10))
    const doubleDigit = parseInt(hundredsArray[1], 10)
    const hundred = parseInt(hundredsArray[0], 10)
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
