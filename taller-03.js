function desglosarString(cadena,param) {
  cad = cadena.replace(/\s+/g,"").split('')
  if(param === 'vocales'){
    return cad.filter(esVocal).length
  } 
  return cad.length - cad.filter(esVocal).length
}

function twoSum(array,n) {  //la funcion retorna solo el primer par de índices de numeros que sumados den n
  ans = []
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {     
      if (array[i]+array[j] === n && array[i] != array[j]) {
        return [i,j]        
      }
    }    
  }  
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