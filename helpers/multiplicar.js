const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
  let salida, consola = '';
  
  for (let i = 1; i < hasta + 1 ; i++) {
    salida  += `${base} x ${i} = ${base * i}\n`;
    consola += `${base} ${'x'.green} ${i} ${'='.blue} ${base * i}\n`;
  }
  if(listar){
    console.log('===================='.rainbow);
    console.log(`    Tabla del ${base}`.yellow);
    console.log('===================='.rainbow);
    console.log( consola );
  }
  
  fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
  return (`tabla-${base}.txt`.inverse);
};

module.exports = {
    crearArchivo: crearArchivo,
}