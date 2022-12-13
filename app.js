const path = require('path');
const fs = require('fs');

const ruta = path.resolve(__dirname, 'data/tareas.json')

const tareasEnJson = fs.readFileSync(ruta, { encoding: 'UTF-8' });
const tareas = JSON.parse(tareasEnJson);
//console.log(tareas);

const accion = process.argv[2];



if(accion == "listar"){
    console.log("---------------------------------------------");
   tareas.forEach(element => {
        
        console.log(element.id + ". " +element.titulo+" / estado: "+element.estado);

   });
   console.log("*****No HAY MAS TAREAS POR EL MOMENTO*****");
    
}else if(accion == "crear"){
    let i=tareas.length+1;
    
   let tarea={
    id:i,
    titulo:process.argv[3],
    fecha:"13-12-2022",
    descripcion:"sin descripcion",
    estado:"pendiente"
}
   tareas.push(tarea);
   let jsonProducts = JSON.stringify(tareas);
   fs.writeFileSync(ruta,jsonProducts)

}
else if(accion == undefined){
    console.log("******************************************");
    console.log("Atención - Tienes que pasarme una Acción a realizar");
    console.log("Las Acciones disponibles son:Listar-Crear");
    console.log("******************************************");
}else{
    console.log("******************************************");
    console.log("No entiendo que quieres hacer");
    console.log("Las Acciones disponibles son:Listar-Crear");
    console.log("******************************************");
}

