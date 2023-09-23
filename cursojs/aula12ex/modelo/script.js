function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = './imagens/fotomanha.jpg'
        document.body.style.background = '#145C9E'
    } else if (hora >= 12 && hora <= 18) {
        img.src = './imagens/fototarde.jpg'
        document.body.style.background = '#766C22'
    } else {
        img.src = './imagens/fotonoite.jpg'
        document.body.style.background = '#1F271B'
    }
}