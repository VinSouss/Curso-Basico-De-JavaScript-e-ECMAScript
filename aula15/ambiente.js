let num = [7, 8, 9]
console.log(num)
num[3] = 10
console.log(`O primeiro valro do nosso vetor é: ${num[0]}`)
num.push(7) //acrecenta o valor no ultimo indice
console.log(`Nosso possui: ${num}`)
num.length //tamanho do array
console.log(`Nosso vetor tem ${num.length} posições!`)
num.sort() //coloca em ordem crescente ordenadamente
console.log(`Ordenando o nosso vetor: ${num.sort()} `)

/* imprimindo um vetor na tela sem os []
for(let pos=0;pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

//maneira simplificada ainda mais de uma impressão
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

//BUSCANDO VALORES DENTRO DO VETOR
console.log(num.indexOf(7))
