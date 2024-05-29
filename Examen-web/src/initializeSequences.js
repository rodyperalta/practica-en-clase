// initializeSequences.js

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function initializeSequences() {
  const secuencias = ['Ejercicio_realizado', 'Tipo_de_ejercicio', 'Deportista'];

  for (const nombre of secuencias) {
    await prisma.secuencia.upsert({
      where: { nombre },
      update: {},
      create: { nombre, secuencia: 1 }
    });
  }
}

initializeSequences()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
