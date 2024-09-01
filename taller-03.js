function desglosarString(cadena,param) {
  cad = cadena.replace(/\s+/g, "").split('')
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

console.log(twoSum([1,2,3,4,5,6,7,8,9],9));
