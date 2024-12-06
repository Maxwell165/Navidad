//IMPORTAMOS LAS CONSTANTES PARA USAR EN CADA FUNCION o CLASE


// FUNCION QUE CALCULA EL TIEMPO PARA LA LLEGADA DE NAVIDAD
const time = ()=>{
    let festividad = new Date(2024,11,25,0,0,0).getTime();
    let date = new Date().getTime()
    let diferencia = festividad - date

    let dia = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    let hora = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minuto = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    let segundo = Math.floor((diferencia % (1000 * 60)) / 1000);

    dias.innerHTML = `${dia.toString().padStart(2,"0")} :<span>Dias</span>`
    horas.innerHTML =`${hora.toString().padStart(2,"0")} :<span>Hr</span>`
    minutos.innerHTML =`${minuto.toString().padStart(2,"0")} :<span>Min</span>`
    segundos.innerHTML =`${segundo.toString().padStart(2,"0")}<span>Sec</span>`
}
//LLAMAMOS A LA FUNCION
time();
//FIJAMOS EL TIEMPO EN QUE SE REALIZARA LOS CAMBIO DE TIEMPO EN ESTE CASO CADA 1000MiliSegundos(1s)
setInterval(time,1000)
//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""



// AÑADIR EL HEADER A LA PAGINA PRINCIPAL