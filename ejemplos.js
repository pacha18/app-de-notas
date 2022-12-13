/* Requerir un modulo */
const path = require('path');
const fs = require('fs');

/* Uso de process.argv */
const accion = process.argv[2];
console.log(accion);

/* Uso de path */
const ruta = path.resolve(__dirname, 'data/data.json')
console.log(ruta);

/* Uso de readFileSync */
const tareasEnJson = fs.readFileSync(ruta, { encoding: 'UTF-8' });
console.log(tareasEnJson);

/* Uso de JSON parse */
const tareas = JSON.parse(tareasEnJson);
console.log(tareas);

/* Uso de JSON stringify */
const tareasJson = JSON.stringify(tareas);
console.log(tareasJson);

/* Uso de writeFileSync */
fs.writeFileSync(ruta, tareasJson);

