function conta(operador, acumulador, ...numeros){
    for(numero of numeros){
        if(operador === "+") acumulador += numero
        if(operador === "-") acumulador -= numero
        if(operador === "/") acumulador /= numero
        if(operador === "*") acumulador *= numero
    }
    console.log(acumulador)
}
conta("*", 200, 1,2,3,4,5,6,7,8,9,10)