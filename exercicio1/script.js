let coxinha = prompt("Deseja uma coxinha? S/N").toLowerCase()
let coxinhav = 0
while(coxinha !== "n"){
    
    coxinha = prompt("Desenja mais uma coxinha? S/N").toLowerCase()
    coxinhav += 2.50
}

console.log(`sua conta deu ${coxinhav}`)