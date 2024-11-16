function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 },  // Coordenadas del centro del mapa
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
}

const Marcador_Mapa = (lat,lng,url)=>{
    const marcadadore =[
        {}
    ]
}