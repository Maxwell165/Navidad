const boton = document.getElementById("boton-music")
const img = document.getElementById("img-music")
const sonido = new Audio('/SRC/IMAGE/BMUSIC/sound-click.mp3')
const sonidobg = new Audio('/SRC/IMAGE/BMUSIC/music2.mp3')

sonidobg.volume = 0.2
sonidobg.loop = true
sonidobg.play()

function cambiarImagen(imgprimary,imgalternative) {
    img.src = imgprimary

    boton.addEventListener("click", () => {
        sonido.play()
        sonido.volume = 0.1      
        if(img.src.includes(imgprimary)){
            img.src = imgalternative
            sonidobg.pause()

        }else{ 
            img.src = imgprimary
            sonidobg.play()
        }
    })
}
const primary = '/SRC/IMAGE/BMUSIC/MUSIC.png'
const secundary = '/SRC/IMAGE/BMUSIC/silenciar-volumen.png'
cambiarImagen(primary,secundary)