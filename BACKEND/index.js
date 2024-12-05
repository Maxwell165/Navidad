const fs = require('fs');
const path = require('path');

const rutaCarta = path.join(__dirname, 'cartas.json');

const guardarCarta = ((nombre,mensaje,email) => {
    fs.readFile(rutaCarta, 'utf-8',(err,data)=>{
        if(err){
            console.log("Error al leer el archivo", err)
        }

        let cartas = JSON.parse(data)
        cartas.push({nombre,mensaje,email})

        fs.writeFile(rutaCarta,JSON.stringify(cartas,null,2), err =>{
            if(err){
                console.log("Error al escribir el archivo", err)
                return
            }
        })

    })
    })

module.exports = {
    guardarCarta
}