import{eliminarTransaccion, recuperarTransaccion} from './EliminaryRecuperar'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/*SE AGREGAN REGISTROS A LAS TABLAS, LOS IDS DE LA TABLA EJERCICIO REALIZADO COMIENZAN DESDE 28 (YA FUERON AGREGADOS
    MEDIANTE LA SIGUIENTE FUNCION)*/


/*async function main() {
  // CREAR INSTANCIAS DE TIPO_DE_EJERCICIO
  await prisma.tipo_de_ejercicio.createMany({
    data: [
      { tipo_de_ejercicio: 'Cardio' },
      { tipo_de_ejercicio: 'Pesas' },
      { tipo_de_ejercicio: 'Yoga' },
    ],
  });

  // CREAR INSTANCIAS DE DEPORTISTA
  await prisma.deportista.createMany({
    data: [
      { nombre: 'Juan', peso: '70', altura: 180, edad: 25 },
      { nombre: 'María', peso: '60', altura: 165, edad: 30 },
      { nombre: 'Carlos', peso: '80', altura: 175, edad: 28 },
    ],
  });

  // CREAR INSTANCIAS DE EJERCICIO_REALIZADO
  await prisma.ejercicio_realizado.createMany({
    data: [
      { Estado: true, Idtipoejercicio: 1, Iddeportista: 1, Fecha: '2024-05-07', Hora: '10:00:00', Tiempo_transcurrido: '1 hora', Calorias_quemadas: '300' },
      { Estado: true, Idtipoejercicio: 2, Iddeportista: 2, Fecha: '2024-05-07', Hora: '12:00:00', Tiempo_transcurrido: '45 minutos', Calorias_quemadas: '200' },
      { Estado: true, Idtipoejercicio: 3, Iddeportista: 3, Fecha: '2024-05-07', Hora: '15:00:00', Tiempo_transcurrido: '30 minutos', Calorias_quemadas: '150' },
    ],
  });

    const ejercicios = await prisma.ejercicio_realizado.findMany();
    const tiposEjercicio = await prisma.tipo_de_ejercicio.findMany();
    const deportistas = await prisma.deportista.findMany();

    // Imprimir los registros en la consola
    console.log('Ejercicios realizados:');
    console.log(ejercicios);

    console.log('Tipos de ejercicio:');
    console.log(tiposEjercicio);

    console.log('Deportistas:');
    console.log(deportistas);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })*/




  //AQUI SE LLAMAN A LAS FUNCIONES DE ELIMINAR Y RECUPERAR.
  //EN NEON SE VE REFLEJADO EL ESTADO COMO TRUE O FALSE DEPENDIENDO QUE FUNCION SE EJECUTE.
  
  async function main() {
    
    // Eliminar la transacción con ID 1
    //await eliminarTransaccion(29);

    // Recuperar la transacción con ID 2
    //await recuperarTransaccion(29);

  }
  
  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });