const mostrarmensaje = document.getElementById("mostrar-mensaje")
const nombremensaje = document.getElementById("nombre-mensaje")
const izquierda = document.getElementById("flecha-izquierda")
const derecha = document.getElementById("flecha-derecha")
const text = document.getElementById("caracteres")
let Cartas = []



const AgregarPersona = () => {
    const enviar = document.getElementById("enviar-carta")
    enviar.addEventListener("click", () => {

        const nombre = document.getElementById("Nombre-input").value
        const email = document.getElementById("Email-input").value
        const mensaje = document.getElementById("text-carta").value
        Cartas.push({ nombre, email, mensaje })
        guardasCarta(nombre, mensaje, email)
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
const contadorCaracteres = ()=>{
    
    
    let Numcaracteres = document.getElementById("text-carta")

    Numcaracteres.addEventListener("input",()=>{
        if(Numcaracteres.value.length > 180){
            Numcaracteres.value = Numcaracteres.value.slice(0,180)
        }
        let caracteres = Numcaracteres.value.length
        text.innerText = `${caracteres}/180`
        
    })


}


AgregarPersona()
MostrarCartas()
contadorCaracteres()