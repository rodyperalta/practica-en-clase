const tipodeejercicio:Itipodeejercicio={
    ID: "1", Tipodeejercicio: "Cardiovascular"
}

const deportista:Ideportista={
    ID: "1",
    Nombre: "Luis",
    Peso: "75 kg",
    Altura: "180 cm",
    Edad: 25
}


const ejerciciorealizado:Iejerciciorealizado[]=[
    {
        ID: "1",
        IDTipodeEjercicio: "1",
        IDDeportista: "1",
        Fecha: "2024-04-30",
        Hora: "08:00",
        Tiempotranscurrido: "1 hora",
        Caloriasquemadas: "300 kcal"
    },
    {
        ID: "2",
        IDTipodeEjercicio: "2",
        IDDeportista: "2",
        Fecha: "2024-04-30",
        Hora: "10:00",
        Tiempotranscurrido: "45 minutos",
        Caloriasquemadas: "250 kcal"
    },
    {
        ID: "3",
        IDTipodeEjercicio: "3",
        IDDeportista: "3",
        Fecha: "2024-04-30",
        Hora: "12:00",
        Tiempotranscurrido: "30 minutos",
        Caloriasquemadas: "200 kcal"
    }
]

interface Itipodeejercicio{
    ID:string,
    Tipodeejercicio:String
}


interface Ideportista{
    ID:string,
    Nombre:String,
    Peso:String,
    Altura:String,
    Edad:number
}

interface Iejerciciorealizado{
    ID:string,
    IDTipodeEjercicio:String, 
    IDDeportista:String, 
    Fecha:String, 
    Hora:String, 
    Tiempotranscurrido:String, 
    Caloriasquemadas:String

}
/*export{tipodeejercicio, deportista, ejerciciorealizado}*/


function eliminarElementoPorID(arr: Iejerciciorealizado[], id: string, callback?: (elementoEliminado: Iejerciciorealizado) => void) {
    const indice = arr.findIndex(item => item.ID === id);
    if (indice !== -1) {
        const elementoEliminado = arr.splice(indice, 1)[0];
        if (callback) {
            callback(elementoEliminado);
        }
    } else {
        console.log(`No se encontró ningún elemento con el ID ${id}.`);
    }
}




export{eliminarElementoPorID, ejerciciorealizado}