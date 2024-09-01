function desglosarString(cadena,param) {
  cad = cadena.replace(/\s+/g,"").split('')
  if(param === 'vocales'){
    return cad.filter(esVocal).length
  } 
  return cad.length - cad.filter(esVocal).length
}

function twoSum(nums, target) {
  return nums.map((num, i) => {
      const complementIndex = nums.findIndex((n, j) => n === target - num && j !== i);
      if (complementIndex !== -1) {
          return [i, complementIndex];  
      }
  }).find(result => result !== undefined); 
}

function conversionRomana(numRomano) {
  let romanos = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  let numeros = [1, 5, 10, 50, 100, 500, 1000];
  let num = 0;
  for (let i = 0; i < numRomano.length; i++) {
    if (i < numRomano.length - 1 && numeros[romanos.indexOf(numRomano[i])] < numeros[romanos.indexOf(numRomano[i + 1])]) {
      num -= numeros[romanos.indexOf(numRomano[i])];
    } else {
      num += numeros[romanos.indexOf(numRomano[i])];
    }
  }
  return num;
}

function esVocal(item) {
  return ['a','e','i','o','u'].includes(item)  
}