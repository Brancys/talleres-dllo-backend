function desglosarString(cadena,param) {
  cad = cadena.replace(/\s+/g,"")
  vocal = ['a','e','i','o','u']
  numVocal = 0
  for (let i = 0; i < cad.length; i++) {
    if (vocal.includes(cad[i])) {
      numVocal++
    }    
  }
  if (param === 'vocales') {
    return numVocal
  }  
  return cad.length - numVocal
}

function twoSum(array,n) {  //la funcion retorna una lista de listas, donde cada sublista es el par de indices que suman n
  ans = []
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {     
      if (array[i]+array[j] === n && array[i] != array[j]) {
        ans.push([i,j])        
      }
    }    
  }
  return ans
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