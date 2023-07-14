const fs = require('fs');
const colors = require('colors');

// const crearArchivo = (base = 5) => {
//   console.log('========================');
//   console.log('      Tabla del: ', base);
//   console.log('========================');

//   let salida = '';

//   for (let index = 1; index <= 10; index++) {
//     salida += `${base} x ${index} = ${base * index}\n`;
//   }

//   console.log(salida);

//   fs.writeFileSync(`tabla-${base}.txt`, salida);

//   console.log(`archivo tabla-${base}.txt creado`);
// };

// const crearArchivo = (base = 5) => {
//   return new Promise((resolve, reject) => {
//     console.log('========================');
//     console.log('      Tabla del: ', base);
//     console.log('========================');

//     let salida = '';

//     for (let index = 1; index <= 10; index++) {
//       salida += `${base} x ${index} = ${base * index}\n`;
//     }

//     console.log(salida);

//     fs.writeFileSync(`tabla-${base}.txt`, salida);

//     resolve(`tabla-${base}.txt`);
//   });
// };

const crearArchivo = async (base = 5, listar = true, hasta = 10) => {
  try {
    let salida = '';
    let consola = '';

    for (let index = 1; index <= hasta; index++) {
      salida += `${base} x ${index} = ${base * index}\n`;
      consola += `${base} ${'x'.green.bold} ${index} ${colors.green.bold('=')} ${base * index}\n`;
    }

    if (listar) {
      console.log('========================'.green);
      console.log('      Tabla del'.green, colors.brightMagenta.bold(base));
      console.log('========================'.green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
