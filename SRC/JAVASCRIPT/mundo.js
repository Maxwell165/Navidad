class Marcador {
    constructor(title,lat, lng, url, map) {
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
            url : this.url,
            scaledSize: new google.maps.Size(40, 40)
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
    constructor(marcadores,map){
        this.marcadores = marcadores
        this.map = map
        this.enfocarMarcador()
    }


    enfocarMarcador(){
        this.marcadores.forEach((marcador) => {
        google.maps.event.addListener(marcador.marker,"click",()=>{
            this.map.setCenter(marcador.marker.getPosition())
            this.map.setZoom(4.5)
            this.ma
            })
        })
    }
}

// FUNCION BOTON MOSTRAR MAPA COMPLETO
const zoomCompleto = (map) =>{
    const planeta = document.getElementById("planeta")
    planeta.addEventListener("click",()=>{
    map.setCenter({ lat: 15, lng: 15 })
    map.setZoom(2.8)
    })
}


// FUNCION PARA CREAR MAPA PERSONALIZADO , CONSTANTES PARA LOS MARCADORES Y INICIAR INSTANCIAS Y FUNCIONES
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 15, lng: 15 },  // Coordenadas del centro del mapa
        zoom: 2.8,  // Nivel de zoom
        mapId: '4f4beacbe7b0addc',
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
        { "nombre": "Peru", "latitud": -10.595594465114734, "longitud": -76.30662798071761, "icono": "https://cdn-icons-png.flaticon.com/512/149/149059.png" },
        { "nombre": "Guatemala", "latitud": 15.78, "longitud": -90.2, "icono": "https://cdn-icons-png.flaticon.com/512/149/149059.png" },
        { "nombre": "EEUU", "latitud": 37.09024, "longitud": -95.712891, "icono": "https://cdn-icons-png.flaticon.com/512/149/149059.png" },
        { "nombre": "Brasil", "latitud": -14.235004, "longitud": -51.92528, "icono": "https://cdn-icons-png.flaticon.com/512/149/149059.png" },
        { "nombre": "Canadá", "latitud": 56.130366, "longitud": -106.3467, "icono": "https://cdn-icons-png.flaticon.com/512/149/149059.png" },
        { "nombre": "México", "latitud": 19.432608, "longitud": -99.13320, "icono": "https://cdn-icons-png.flaticon.com/512/149/149059.png" },
        { "nombre": "Argentina", "latitud": -38.416097, "longitud": -63.61, "icono": "https://cdn-icons-png.flaticon.com/512/149/149059.png" },
        { "nombre": "Francia", "latitud": 46.569177329934845, "longitud": 1.786342174972705, "icono": "https://cdn-icons-png.flaticon.com/512/149/149059.png" },
        { "nombre": "Rusia", "latitud": 61.52401, "longitud": 105.3187, "icono": "https://cdn-icons-png.flaticon.com/512/149/149059.png" },
        { "nombre": "Ghana", "latitud": 7.946527, "longitud": -1.02319, "icono": "https://cdn-icons-png.flaticon.com/512/149/149059.png" },
        { "nombre": "Australia", "latitud": -24.673317248276838, "longitud": 135.38008901939668, "icono": "https://cdn-icons-png.flaticon.com/512/149/149059.png" },
        { "nombre": "China", "latitud": 35.861660, "longitud": 104.19539, "icono": "https://cdn-icons-png.flaticon.com/512/149/149059.png" },
        { "nombre": "Filipinas", "latitud": 13.495204820573125, "longitud": 124.19399463819018, "icono": "https://cdn-icons-png.flaticon.com/512/149/149059.png" },
        { "nombre": "Finlandia", "latitud": 61.924110, "longitud": 25.74815, "icono": "https://cdn-icons-png.flaticon.com/512/149/149059.png" },
        { "nombre": "Nueva Zelanda", "latitud": -43.262155080828116, "longitud": 170.776025396811, "icono": "https://cdn-icons-png.flaticon.com/512/149/149059.png" },
        { "nombre": "Reino Unido", "latitud": 55.00598577080574, "longitud": -2.8432026859699615, "icono": "https://cdn-icons-png.flaticon.com/512/149/149059.png" },
    ];
    // INTANCIA CON UN MAP PARA CREAR UN MARCADOR
      const Paises = paises.map((pais) => 
        new Marcador(pais.nombre, pais.latitud, pais.longitud, pais.icono, map))
    // INSTANCIA PARA EL ENVENTO DE ENFOQUE DE MARCADOR
      const evento = new eventos(Paises,map)
      evento.enfocarMarcador()
    //PANTALLA COMPLETA FUNCION BOTON
      zoomCompleto(map)
}

