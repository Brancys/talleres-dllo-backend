function findMax(numeros) {
  let max = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > max) {
      max = numeros[i];
    }
  }
  return max
}

function includes(numeros,n) {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === n) {
      return true
    }
  }
  return false
}

function sum(numeros = []) {
  let sum = 0
  for (let i = 0; i < numeros.length; i++) sum += numeros[i];
  return sum
}

function missingNumbers(numeros = []) {
  numeros.sort(function (a, b) {
    return a - b
  });
  min = numeros[0]
  max = numeros.slice(-1)[0]
  newArray = numeros.slice(1, -1)
  result = []
  for (let i = min + 1 ; i < max ; i++ ) {
    if (!newArray.includes(i)) {
      result.push(i)      
    }
  }
  return result
}
