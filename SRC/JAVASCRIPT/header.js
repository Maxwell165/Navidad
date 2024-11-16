// Función para cargar el header desde el archivo HTML
document.addEventListener('DOMContentLoaded',()=>{
    fetch('/SRC/HTML/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-container').innerHTML = data;
        const navegador = document.getElementById("container-nav")
        const barrahamburguesa = document.getElementById("menu-togle")
        const equis = document.getElementById("equis")

        // FUNCION PARA ABRIR EL NAV EN EL HEADER CON BARRA HAMBURGUESA
        const abrirnav = ()=>{
            barrahamburguesa.addEventListener("click",()=>{
                navegador.classList.add("open")
                barrahamburguesa.style.display ="none"
                
            })
        }
        // FUNCION PARA CERRAR EL NAV CON UNA X 
        const cerrarnav =()=>{
            equis.addEventListener("click",()=>{
                navegador.classList.remove("open")
                barrahamburguesa.style.display="flex"
                
            })
        }
        // LLAMAMOS A LA FUNCION PARA CERRAR Y ABRIR NAV
        abrirnav()
        cerrarnav()
    })
    .catch(error => console.error('Error al cargar el header:', error));


})
