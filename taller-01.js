function convertidorTemp(c){
	return (1.8*c)+32
}

//en signo colocar 1 o -1, si se quiere obtener la solución positiva o negativa respectivamente.
function resolvedor(a,b,c,signo){ 
	return (-1*b + signo*(b*b - 4*a*c)**(1/2))/(2*a)  
}

function mejorParidad(n){
	return !(n%2)
}

function peorParidad(n){
	par = true
	for (let i = 1; i <= n; i++) {  
  	if(par == false){
    	par = true
    }else{
    	par = false
    }
  }
  return par
}