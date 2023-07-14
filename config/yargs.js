const argv = require('yargs')
  .options({
    b: {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'Es la base de la tabla de multiplicar',
    },
    l: {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola',
    },
    h: {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Muestra la tabla hasta un número determinado',
    }
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base debe ser un número';
    }
    return true;
  }).argv;

  module.exports = argv;