import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function createData() {
  // Crear datos para la entidad Tipo_de_ejercicio
  await prisma.tipo_de_ejercicio.create({
    data: {
      tipo_de_ejercicio: 'Running'
    }
  });

  // Crear datos para la entidad Deportista
  await prisma.deportista.create({
    data: {
      nombre: 'John Doe',
      peso: '70kg',
      altura: 180,
      edad: 25
    }
  });

  // Crear datos para la entidad Ejercicio_realizado
  await prisma.ejercicio_realizado.create({
    data: {
      Estado: true,
      Idtipoejercicio: 1, // El ID del Tipo_de_ejercicio creado anteriormente
      Iddeportista: 1,     // El ID del Deportista creado anteriormente
      Fecha: '2024-05-28',
      Hora: '10:00',
      Tiempo_transcurrido: '30m',
      Calorias_quemadas: '200'
    }
  });
}

async function main() {
  await createData();
  console.log('Datos agregados correctamente.');

  // Mostrar los datos de la entidad Secuencia
  const secuencias = await prisma.secuencia.findMany();
  console.log('Datos de la entidad Secuencia:');
  console.log(secuencias);

  await prisma.$disconnect();
}

main()
  .catch(e => {
    console.error('Error:', e);
    process.exit(1);
  });
