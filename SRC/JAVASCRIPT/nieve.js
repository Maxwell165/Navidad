const mostrarnieve = document.getElementById("seccion1")
// ANIMACION DE LA NIEVE PARA SECCION 01
const cantidad = ()=>{   
        const copo = document.createElement("span")
        copo.classList.add("nieve")

        let tamaño = Math.floor((Math.random()*7)) + 2;
        let opacidad =Math.random() * (0.9 - 0.6) + 0.6;
        let velocidad = Math.floor(Math.random()*20) + 15;
        let ejeX = Math.floor(Math.random() * 101);
        let ejey = Math.floor(Math.random()* (60 - 30)+ 30);


        copo.style.width = `${tamaño}px`
        copo.style.height = `${tamaño}px`
        copo.style.opacity = opacidad
        copo.style.animationDuration = `${velocidad}s`
        copo.style.right = `${ejeX}%`
        copo.style.top = `-${ejey}%`

        mostrarnieve.appendChild(copo)
        
    
}
setInterval(()=>cantidad(),100)
