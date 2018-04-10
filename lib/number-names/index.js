module.exports = number => {
  const returnSingle = singleNumber => {
    if (singleNumber === 1) {
      return 'one'
    }
    if (singleNumber === 2) {
      return 'two'
    }
    if (singleNumber === 3) {
      return 'three'
    }
    if (singleNumber === 4) {
      return 'four'
    }
    if (singleNumber === 5) {
      return 'five'
    }
    if (singleNumber === 6) {
      return 'six'
    }
    if (singleNumber === 7) {
      return 'seven'
    }
    if (singleNumber === 8) {
      return 'eight'
    }
    if (singleNumber === 9) {
      return 'nine'
    }
  }

  const tens = tennumber => {
    // if (tennumber === 1) {
    //   return 'ten/eleven'
    // }
    if (tennumber === 2) {
      return 'twenty'
    }
    if (tennumber === 3) {
      return 'thirty'
    }
    if (tennumber === 4) {
      return 'forty'
    }
    if (tennumber === 5) {
      return 'fifty'
    }
    if (tennumber === 6) {
      return 'sixty'
    }
    if (tennumber === 7) {
      return 'seventy'
    }
    if (tennumber === 8) {
      return 'eighty'
    }
    if (tennumber === 9) {
      return 'ninety'
    }
  }

  const returnTeens = teennumber => {
    console.warn('ARE WE HERE?', teennumber)
    if (teennumber === '16') {
      return 'sixteen'
    }
  }

  if (number.toString().length <= 3) {
    if (number.toString().length === 1) {
      const single = returnSingle(parseInt(number.toString().split('')[0], 10))
      return `${single}`
    }

    if (number.toString().length === 2) {
      console.warn('HELO', number)
      const firstDigit = number.toString().split('')[0]
      if (firstDigit === '1') {
        console.warn('HELO2', number)
        returnTeens(number)
      }
      if (parseInt(number.toString().split('')[1], 10) === 0) {
        return tens(parseInt(number.toString().split('')[0], 10))
      }
      const dec = tens(parseInt(number.toString().split('')[0], 10))
      const single = returnSingle(parseInt(number.toString().split('')[1], 10))
      return `${dec} ${single}`
    }
    if (number.toString().length === 3) {
      return 'hundred'
    }
  }

  let hundredsArray = []

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
