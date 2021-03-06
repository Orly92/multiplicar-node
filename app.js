const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const color = require("colors");

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base,argv.limite).then(archivo => console.log(`${archivo}`))
            .catch(err=>console.log(err));
        break;

    case 'crear':
        crearArchivo(argv.base,argv.limite).then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(err=>console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
        break;

}
