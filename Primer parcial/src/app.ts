import{eliminarElementoPorID, ejerciciorealizado}from './objetos/Objetos'
import { fetchData, Artinstitute } from './objetos/Rest';



// Ejemplo de uso con callback:
const idAEliminarConCallback = "3"; // ID del elemento a eliminar
eliminarElementoPorID(ejerciciorealizado, idAEliminarConCallback, elementoEliminado => {
    console.log("Elemento eliminado con callback:", elementoEliminado);
});
console.log("Arreglo actualizado:", ejerciciorealizado);






// URL del servicio REST
const url = 'https://api.artic.edu/api/v1/artworks/search?q=cats';

// Llama a fetchData
fetchData<Artinstitute>(url)
    .then(data => {
        
        console.log(data);
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });
