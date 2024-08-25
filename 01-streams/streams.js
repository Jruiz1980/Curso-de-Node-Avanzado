
const fs = require('fs');


console.time("tiempo de respuesta");


// for(let i=0; i<= 10; i++) {
//   fs.readFileSync('archivo.txt', 'utf8');
// }


const read = ()=> {
for(let i=0; i<= 10; i++) {

  const streamEscritura = fs.createReadStream("archivo.txt", {
    encoding: "utf-8"
  });

  streamEscritura.on('data', (chunk) => {
    console.log(`Parte ${i}: ${chunk}`);
  });

  streamEscritura.on('end', () => {
    console.log(`Fin de lectura para la parte ${i}`);
  });

}
};



console.timeEnd("tiempo de respuesta");