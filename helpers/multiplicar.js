const fs = require('fs') ;
const crearArchivo =  async ( base = 5, listar = false,hasta=10) => {

    try {
        let hastadonde ="";
         hastadonde = hasta;
         salida = '';
        for (let i=  1;  i<=hastadonde; i++ ) {
            salida+=`${base} * ${i}=${base*i}\n`;
            
        }
        if(listar){
            console.log(salida);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        
        return `tabla-${base}.txt `;
    } catch (err) {
        throw err;
        
    }


}


module.exports = {
     crearArchivo
}