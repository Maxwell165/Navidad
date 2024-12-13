const mediaQuery = window.matchMedia('(min-width: 1000px)')
const sonido = new Audio('/SRC/IMAGE/BMUSIC/sound-click.mp3')

class Marcador {
    constructor(title, lat, lng, url, map) {
        this.title = title;
        this.lat = lat;
        this.lng = lng;
        this.url = url;
        this.map = map;
        this.marker = null
        this.crearMarcador();
    }
    crearMarcador() {
        const icono = {
            url: this.url,
            scaledSize: new google.maps.Size(50, 50),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(40, 40)

        }


        this.marker = new google.maps.Marker({
            title: this.title,
            position: { lat: this.lat, lng: this.lng },
            map: this.map,
            icon: icono,
        })
    }

}

//EVENTOS PARA LOS MARCADORES
class eventos {
    constructor(marcadores, map) {
        this.marcadores = marcadores
        this.map = map
        this.indice = 0
        this.resultado = null
        this.marcadorenfocado = false
        this.enfocarMarcador()
        // this.moverMarcador()
    }

    //METODO PARA ENFOCAR EL PIN
    enfocarMarcador() {
        console.log(this.marcadorenfocado)
        this.marcadores.forEach((marcador) => {
            
            google.maps.event.addListener(marcador.marker, "click", () => {
                this.map.setCenter(marcador.marker.getPosition())
                this.map.setZoom(4)
                
                this.resultado = modalpaises.find((elemento) =>
                    elemento.nombre.toLowerCase() === marcador.title.toLowerCase());
                    InsertarPaises(this.resultado)
                    InsertarImagen(this.resultado)
                    this.indice = modalpaises.indexOf(this.resultado)
                    this.marcadorenfocado = true
            })
        })

    }


    // moverMarcador() {
    //     //METODO PARA AVANZAR CON LAS FLECHAS
    //     const atras = document.getElementById("atras")
    //     const delante = document.getElementById("delante")
    //             // EVENTO PARA AVANZAR CON EL BOTON 
    //         atras.addEventListener("click", () => {
    //             try {

    //                     let newindice = this.indice - 1
    //                     console.log(newindice)

                    



    //             }
    //             catch {
    //                 console.error("Error al atras")
    //             }
    //         })
    //         // EVENTO PARA AVANZAR CON EL BOTON 
    //         delante.addEventListener("click", () => {
    //             try {
                    
                    
    //             }
    //             catch {
    //                 console.error("Error al delante")
    //             }

    //         })




        
    // }
}
// METODO PAARA MOSTRAR  MAPA COMPLETO
const zoomCompleto = (map) => {
    const planeta = document.getElementById("planeta")
    planeta.addEventListener("click", () => {
        sonido.play()
        sonido.volume = 0.1
        map.setCenter({ lat: 15, lng: 15 })
        if(mediaQuery.matches){
            map.setZoom(2)
        }else{
            map.setZoom(0.5)
        }
        const contenedorPaises = document.getElementById("paises")
        contenedorPaises.innerHTML = ""
    })

}


// FUNCION PARA CREAR MAPA PERSONALIZADO , CONSTANTES PARA LOS MARCADORES Y INICIAR INSTANCIAS Y FUNCIONES
function initMap() {
    const zoom = mediaQuery.matches ? 2 : 0.5
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 15, lng: 15 },  // Coordenadas del centro del mapa
        mapId: '4f4beacbe7b0addc',
        zoom : zoom,
        disableDefaultUI: true,  // Desactivar todos los controles predeterminados
        draggable: false,  // Desactivar la capacidad de arrastrar el mapa
        scrollwheel: false,  // Desactivar el zoom con la rueda del ratón
        zoomControl: false,  // Desactivar el control de zoom
        mapTypeControl: false,  // Desactivar el control de tipo de mapa
        streetViewControl: false,  // Desactivar el control de Street View
        fullscreenControl: false,  // Desactivar el control de pantalla completa          
    });

    // ARRAY DE OBJETOS DE CADA PAIS
    const paises = [
        { "nombre": "Peru", "latitud": -10.595594465114734, "longitud": -76.30662798071761, "icono": "/SRC/IMAGE/MUNDO/SVG/pin-rojo.svg" },
        { "nombre": "Guatemala", "latitud": 15.78, "longitud": -90.2, "icono": "/SRC/IMAGE/MUNDO/SVG/pin-celeste.svg" },
        { "nombre": "EEUU", "latitud": 37.09024, "longitud": -95.712891, "icono": "/SRC/IMAGE/MUNDO/SVG/pin-marron.svg" },
        { "nombre": "Brasil", "latitud": -14.235004, "longitud": -51.92528, "icono": "/SRC/IMAGE/MUNDO/SVG/pin.amarillo.svg" },
        { "nombre": "Canada", "latitud": 52.130366, "longitud": -106.3467, "icono": "/SRC/IMAGE/MUNDO/SVG/pin-naranja.svg" },
        { "nombre": "Mexico", "latitud": 25.432608, "longitud": -105.13320, "icono": "/SRC/IMAGE/MUNDO/SVG/pin-rosado.svg" },
        { "nombre": "Argentina", "latitud": -38.416097, "longitud": -63.61, "icono": "/SRC/IMAGE/MUNDO/SVG/pin-verde.svg" },
        { "nombre": "Francia", "latitud": 46.569177329934845, "longitud": 1.786342174972705, "icono": "/SRC/IMAGE/MUNDO/SVG/pin.amarillo.svg" },
        { "nombre": "Rusia", "latitud": 61.52401, "longitud": 80.3187, "icono": "/SRC/IMAGE/MUNDO/SVG/pin-rojo.svg" },
        { "nombre": "Ghana", "latitud": 7.946527, "longitud": -1.02319, "icono": "/SRC/IMAGE/MUNDO/SVG/pin-azul-oscuro.svg" },
        { "nombre": "Australia", "latitud": -24.673317248276838, "longitud": 135.38008901939668, "icono": "/SRC/IMAGE/MUNDO/SVG/pin-verde.svg" },
        { "nombre": "Corea del sur", "latitud": 36.20955300864592, "longitud": 127.81755223789501, "icono": "/SRC/IMAGE/MUNDO/SVG/pin-rojo.svg" },
        { "nombre": "Filipinas", "latitud": 13.495204820573125, "longitud": 124.19399463819018, "icono": "/SRC/IMAGE/MUNDO/SVG/pin-azul-oscuro.svg" },
        { "nombre": "Finlandia", "latitud": 61.924110, "longitud": 25.74815, "icono": "/SRC/IMAGE/MUNDO/SVG/pin-rosado.svg" },
        { "nombre": "Nueva Zelanda", "latitud": -43.262155080828116, "longitud": 170.776025396811, "icono": "/SRC/IMAGE/MUNDO/SVG/pin-celeste.svg" },
        { "nombre": "Reino Unido", "latitud": 55.00598577080574, "longitud": -2.8432026859699615, "icono": "/SRC/IMAGE/MUNDO/SVG/pin-marron.svg" },
    ];
    // INTANCIA CON UN MAP PARA CREAR UN MARCADOR
    const Paises = paises.map((pais) =>
        new Marcador(pais.nombre, pais.latitud, pais.longitud, pais.icono, map))
    // INSTANCIA PARA EL ENVENTO DE ENFOQUE DE MARCADOR
    new eventos(Paises, map)
    //PANTALLA COMPLETA FUNCION BOTON
    zoomCompleto(map)
    // AÑADIR INFORMACION A CADA PIN
}






