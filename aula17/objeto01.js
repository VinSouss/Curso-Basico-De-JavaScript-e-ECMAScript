let amigo = {nome: 'jose', 
sexo:'M', 
peso: 89.0, 
engondar(p=0){
    console.log('Engordou')
    this.peso += p
} }

amigo.engondar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)