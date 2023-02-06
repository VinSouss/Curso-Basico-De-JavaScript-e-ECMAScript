function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        res.innerHTML = `Idade Caulculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //crianca
                img.setAttribute('src','foto-bebe-m.png')

            }else if(idade >=10 && idade < 21){
                //adolecente
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if(idade >=21 && idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }else{
                ///idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //crianca
                img.setAttribute('src', 'foto-bebe-f.png')
            }else if(idade >=10 && idade < 21){
                //adolecente
                img.setAttribute('src', 'foto-jovem-f.png')
            }else if(idade >=21 && idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }else{
                ///idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }else{
            window.alert('[Dados Inválidos]')
        }
        res.style.textAlign = 'center' /// deixa a mensagem no centro
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` //Mensagem
        res.appendChild(img) /// adiciona elemento que no caso é o (img)
    }
}