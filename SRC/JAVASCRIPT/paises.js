let modalpaises = [
    {
        nombre: "Brasil",
        imagen: "/SRC/IMAGE/MUNDO/COS-IMG/br.png",
        descripcion: "Los festejos de Navidad comienzan cerca de la medianoche y suelen incluir grandes cenas en familia, regalos y la celebración de la 'Misa de Gallo' en las iglesias. A pesar del clima cálido y tropical del verano, es frecuente el uso de decoración relacionada con el invierno y la nieve.",
    },
    {
        nombre: "Peru",
        imagen: "/SRC/IMAGE/MUNDO/COS-IMG/pe.png", 
        descripcion: "En Perú, la Navidad se caracteriza por reuniones familiares en la noche del 24 de diciembre, con una cena tradicional que incluye pavo, panetón y chocolate caliente, a pesar del clima veraniego. Un dato curioso es el 'chocolatón', donde comunidades comparten chocolate y panetón con los más necesitados.",
    },
    {
        nombre: "Argentina",
        imagen: "/SRC/IMAGE/MUNDO/COS-IMG/ar.png", 
        descripcion: "En Argentina, la Navidad comienza exactamente a la medianoche. Para dar inicio a esta festividad, muchas familias se reúnen a celebrar, se hacen regalos y encienden fuegos artificiales a primeras horas de la madrugada.",

    },
    {
        nombre: "Guatemala",
        imagen: "/SRC/IMAGE/MUNDO/COS-IMG/gt.png",
        descripcion: "Los guatemaltecos celebran la Navidad con festejos y bailes. Usan sombreros denominados 'Puritina', comen tamales al estilo guatemalteco, arrojan petardos a la medianoche y bailan distintos estilos hasta el amanecer.",

    },
    {
        nombre: "Mexico",
        imagen: "/SRC/IMAGE/MUNDO/COS-IMG/mx.png", 
        descripcion: "En México, niños de todas las edades rompen piñatas para Navidad. Adultos y niños por igual se vendan los ojos, dan vueltas y, con el golpe de un bastón, intentan abrir las piñatas colgantes con forma de estrella. Cuando las abren, caen nueces, frutas y golosinas para alegría de todos.",

    },
    {
        nombre: "EEUU",
        imagen: "/SRC/IMAGE/MUNDO/COS-IMG/us.png",
        descripcion: "En Estados Unidos, se cuelgan calcetines en Nochebuena. Según la leyenda, San Nicolás quiso ayudar a una familia y, para sorprenderla, bajó por la chimenea y colocó bolsas de oro en unos calcetines que colgaban allí. Desde entonces, San Nicolás pasó a ser Santa Claus, famoso por sus regalos.",

    },
    {
        nombre: "Canada",
        imagen: "/SRC/IMAGE/MUNDO/COS-IMG/ca.png", 
        descripcion: "Los niños canadienses suelen festejar una Navidad blanca, con mucha nieve. Se cubren con bufandas y gorros de lana para jugar en la nieve, patinar sobre hielo y andar en trineo. En Nochebuena, dejan leche y galletas para Santa junto a la chimenea y, a veces, una zanahoria para los renos.",

    },
    {
        nombre: "Ghana",
        imagen: "/SRC/IMAGE/MUNDO/COS-IMG/gh.png", 
        descripcion: "La Navidad en Ghana incluye a toda la familia. Los adultos se disfrazan y reparten golosinas y dulces en todo el barrio. Los niños decoran sus casas con arreglos navideños de papel y dibujos que hacen en la escuela.",

    },
    {
        nombre: "Francia",
        imagen: "/SRC/IMAGE/MUNDO/COS-IMG/fr.png", 
        descripcion: "En Francia, la tradición consiste en que los niños coloquen sus zapatos junto a la chimenea para esperar la llegada de Santa. Si se portaron bien durante el año, Santa llenará los zapatos con regalos.",

    },
    {
        nombre: "Reino Unido",
        imagen: "/SRC/IMAGE/MUNDO/COS-IMG/uk.png", 
        descripcion: "Los festejos de Navidad comienzan cerca de la medianoche y suelen incluir grandes cenas en familia, regalos y la celebración de la 'Misa de Gallo' en las iglesias. A pesar del clima cálido y tropical del verano, es frecuente el uso de decoración relacionada con el invierno y la nieve.",

    },
    {
        nombre: "Rusia",
        imagen: "/SRC/IMAGE/MUNDO/COS-IMG/ru.png", 
        descripcion: "En el Reino Unido, entusiastas de todas las edades se divierten con un artículo típico llamado “Christmas cracker”, que consiste en un tubo envuelto en papel de colores, con tiras en cada extremo. Cuando se jalan, el tubo estalla con un fuerte sonido y salen sombreros de papel, juguetes, bromas y premios.",

    },
    {
        nombre: "Corea del sur",
        imagen: "/SRC/IMAGE/MUNDO/COS-IMG/kr.png",
        descripcion: "En Corea del Sur, la Navidad es un feriado nacional. También se considera un feriado romántico, ya que muchas parejas tienen citas en la ciudad, donde las calles y tiendas están adornadas con luces resplandecientes.",
    },
    {
        nombre: "Filipinas",
        imagen: "/SRC/IMAGE/MUNDO/COS-IMG/ph.png", 
        descripcion: "Filipinas es famosa por tener la temporada de Navidad más larga del mundo. Abarca cuatro meses: septiembre, octubre, noviembre y diciembre. Los villancicos navideños suelen comenzar a escucharse desde principios de septiembre.",
    },
    {
        nombre: "Australia",
        imagen: "/SRC/IMAGE/MUNDO/COS-IMG/au.png", 
        descripcion: "Su ubicación en el hemisferio sur hace que Australia reciba la Navidad en verano, en el mes de diciembre. En lugar de comer chocolate y decorar con cascabeles, muchos australianos celebran esta festividad en la playa con un almuerzo de camarones y algunas partidas de cricket.",
    },
    {
        nombre: "Finlandia",
        imagen: "/SRC/IMAGE/MUNDO/COS-IMG/fi.png", 
        descripcion: "Los finlandeses creen que Santa Claus ('Joulupukki') vive en la zona norte del país. En Korvatunturi, para ser precisos. Si lo visitas, podrías descubrir su taller secreto donde los duendes trabajan arduamente o podrías encontrar renos paseando por los bosques de pinos.",
    },
    {
        nombre: "Nueva Zelanda",
        imagen: "/SRC/IMAGE/MUNDO/COS-IMG/nz.png", 
        descripcion: "En Nueva Zelanda, amigos y familiares hacen una parrillada para Navidad. Una de las comidas típicas es la carne de cordero, que se cocina en un 'hangi' (un hoyo en el suelo o un horno de barro) y el postre preferido es el 'pavlova': merengue cubierto de frutas frescas, como frutillas y kiwi.",
    },
];
function InsertarImagen(pais){
    try{
        const contenedorPaises = document.getElementById("paises")
        const img = document.createElement("img")
        img.className = "img-pais"
        img.src = pais.imagen
        contenedorPaises.appendChild(img)

    }
    catch{
        console.error("Error al Insertar imagenes")
    }
}

function InsertarPaises(pais) {
    try{
        const contenedorPaises = document.getElementById("paises")
        contenedorPaises.innerHTML = ""
        const contenedor = document.createElement("div")
        const titulo = document.createElement("h2")
        const separador = document.createElement("span")
        const descripcion = document.createElement("p")
        

        
        contenedor.className = "card"
        titulo.textContent = pais.nombre
        separador.textContent = "----------------------------------------------"
        descripcion.textContent = pais.descripcion

        contenedor.appendChild(titulo)
        contenedor.appendChild(separador)
        contenedor.appendChild(descripcion)
        contenedorPaises.appendChild(contenedor)
    }
    catch{
        console.error("Error al Insertar los paises")
    }
        
    }

