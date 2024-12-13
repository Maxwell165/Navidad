const mostrarmensaje = document.getElementById("mostrar-mensaje")
const nombremensaje = document.getElementById("nombre-mensaje")
const izquierda = document.getElementById("flecha-izquierda")
const derecha = document.getElementById("flecha-derecha")
const text = document.getElementById("caracteres")
const mediaQuery = window.matchMedia('(min-width: 1000px)')
let Cartas = []

const imagenSrc = () => {
        const carta = document.getElementById("img-seccion1")
        const carta2 = document.getElementById("img-seccion02")
        if (mediaQuery.matches) {
            carta.src = "/SRC/IMAGE/CARTANOEL/prueba2.svg"
            carta2.src = "/SRC/IMAGE/CARTANOEL/MENSAJES-desktop.svg"
        }
        else {
            carta.src = "/SRC/IMAGE/CARTANOEL/carta-mobile.svg"
            carta2.src = "/SRC/IMAGE/CARTANOEL/ver-carta-prueba.svg"
        }
        
}

const AgregarPersona = () => {
    const enviar = document.getElementById("enviar-carta")
    enviar.addEventListener("click", () => {

        const nombre = document.getElementById("Nombre-input").value
        const email = document.getElementById("Email-input").value
        const mensaje = document.getElementById("text-carta").value
        Cartas.push({ nombre, email, mensaje })
        document.getElementById("Nombre-input").value = "";
        document.getElementById("Email-input").value = "";
        document.getElementById("text-carta").value = "";

        text.innerText = "0/180"

        if (Cartas.length === 1) {
            mostrarmensaje.innerText = Cartas[0].mensaje;
            nombremensaje.innerText = Cartas[0].nombre;
        }
    })
}


const MostrarCartas = () => {
    var indice = 0

    // EVENTO PARA EL BOTON DERECHO AVANZA HACIA EL INDICE 1 PORQUE EL 0 YA SE MUESTRA
    derecha.addEventListener("click", () => {
        indice++
        if (indice >= Cartas.length) {
            indice = 0
        }
        mostrarmensaje.innerText = Cartas[indice].mensaje
        nombremensaje.innerText = Cartas[indice].nombre

    })
    izquierda.addEventListener("click", () => {
        indice--
        if (indice < 0) {
            indice = Cartas.length - 1
        }
        mostrarmensaje.innerText = Cartas[indice].mensaje
        nombremensaje.innerText = Cartas[indice].nombre


    })

}
const contadorCaracteres = () => {


    let Numcaracteres = document.getElementById("text-carta")

    Numcaracteres.addEventListener("input", () => {
        if (Numcaracteres.value.length > 180) {
            Numcaracteres.value = Numcaracteres.value.slice(0, 180)
        }
        let caracteres = Numcaracteres.value.length
        text.innerText = `${caracteres}/180`

    })


}

AgregarPersona()
MostrarCartas()
contadorCaracteres()
imagenSrc()
// mediaQuery.addEventListener("change",imagenSrc)
