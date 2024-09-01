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

console.log(desglosarString('cadena','vocales'));
