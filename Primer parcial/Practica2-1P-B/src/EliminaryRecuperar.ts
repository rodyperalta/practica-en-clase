import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

//FUNCIONES PARA ELIMINAR Y RECUPERAR LAS TRANSACCIONES.
async function eliminarTransaccion(idTransaccion: number) {
    const transaccion = await prisma.ejercicio_realizado.findUnique({
      where: { id: idTransaccion },
    });
  
    if (!transaccion) {
      throw new Error('No se encontró la transacción con el ID proporcionado.');
    }
  
    await prisma.ejercicio_realizado.update({
      where: { id: idTransaccion },
      data: { Estado: false },
    });
  
    console.log(`Transacción con ID ${idTransaccion} eliminada exitosamente.`);
  }
  
  async function recuperarTransaccion(idTransaccion: number) {
    const transaccion = await prisma.ejercicio_realizado.findUnique({
      where: { id: idTransaccion },
    });
  
    if (!transaccion) {
      throw new Error('No se encontró la transacción con el ID proporcionado.');
    }
  
    await prisma.ejercicio_realizado.update({
      where: { id: idTransaccion },
      data: { Estado: true },
    });
  
    console.log(`Transacción con ID ${idTransaccion} recuperada exitosamente.`);
  }

  export{eliminarTransaccion, recuperarTransaccion}