function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/menino-250.png')
            } else if (idade >= 10 && idade < 21) { // Pode usar (idade < 21) apenas.
                img.setAttribute('src', 'imagens/homem-jovem-250.png')
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', 'imagens/homem-adulto-250.png')
            } else {
                img.setAttribute('src', 'imagens/homem-idoso-250.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/menina-250.png')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'imagens/mulher-jovem-250.png')
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute('src', 'imagens/mulher-adulta-250.png')
            } else {
                img.setAttribute('src', 'imagens/mulher-idosa-250.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}