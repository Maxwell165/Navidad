class Marcador {
    constructor(lat, lng, url, map) {
        this.lat = lat;
        this.lng = lng;
        this.url = url;
        this.map = map;
        this.crearMarcador();
    }
    crearMarcador() {
        const icono = {
            url : this.url,
            scaledSize: new google.maps.Size(40, 40)
        }


        new google.maps.Marker({
            position: { lat: this.lat, lng: this.lng },
            map: this.map,
            icon: icono
        })
    }

}

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
    //INSTANCIAS PARA MARCAR PAISES AMERICANOS
    const Peru = new Marcador(-10.595594465114734, -76.30662798071761, "https://cdn-icons-png.flaticon.com/512/149/149059.png",map)
    const guatemala = new Marcador(15.78, -90.2, "https://cdn-icons-png.flaticon.com/512/149/149059.png",map)
    const EEUU = new Marcador(  37.09024, -95.712891, "https://cdn-icons-png.flaticon.com/512/149/149059.png",map)
    const brasil = new Marcador( -14.235004, -51.92528, "https://cdn-icons-png.flaticon.com/512/149/149059.png",map)
    const canada = new Marcador( 56.130366, -106.3467, "https://cdn-icons-png.flaticon.com/512/149/149059.png",map)
    const mexico = new Marcador( 19.432608, -99.13320, "https://cdn-icons-png.flaticon.com/512/149/149059.png",map)
    const argentina = new Marcador ( -38.416097, -63.61, "https://cdn-icons-png.flaticon.com/512/149/149059.png",map)
    //INSTACIONES PARA MARCAR PAISES EUROPEOS, AFRICANOS, ASIATICOS y OCEANIA
    const francia = new Marcador (46.569177329934845, 1.786342174972705, "https://cdn-icons-png.flaticon.com/512/149/149059.png",map )
    const rusia = new Marcador (61.52401, 105.3187, "https://cdn-icons-png.flaticon.com/512/149/149059.png",map)
    const ghana = new Marcador ( 7.946527, -1.02319, "https://cdn-icons-png.flaticon.com/512/149/149059.png",map)
    const australia = new Marcador ( -24.673317248276838, 135.38008901939668,"https://cdn-icons-png.flaticon.com/512/149/149059.png",map )
    const china = new Marcador ( 35.861660, 104.19539, "https://cdn-icons-png.flaticon.com/512/149/149059.png",map)
    const filipinas = new Marcador ( 13.495204820573125, 124.19399463819018, "https://cdn-icons-png.flaticon.com/512/149/149059.png",map)
    const finlandia = new Marcador( 61.924110, 25.74815, "https://cdn-icons-png.flaticon.com/512/149/149059.png",map)
    const nuevazelanda = new Marcador(-43.262155080828116, 170.776025396811, "https://cdn-icons-png.flaticon.com/512/149/149059.png",map)
    const reinounido = new Marcador (55.00598577080574, -2.8432026859699615, "https://cdn-icons-png.flaticon.com/512/149/149059.png",map)
}



