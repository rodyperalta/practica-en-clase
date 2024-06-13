import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getEjerciciosRealizados = () => prisma.ejercicio_realizado.findMany();
export const getTiposDeEjercicio = () => prisma.tipo_de_ejercicio.findMany();
export const getDeportistas = () => prisma.deportista.findMany();

export const createEjercicioRealizado = (data: any) => prisma.ejercicio_realizado.create({ data });
export const createTipoDeEjercicio = (data: any) => prisma.tipo_de_ejercicio.create({ data });
export const createDeportista = (data: any) => prisma.deportista.create({ data });
