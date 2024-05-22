-- AlterTable
ALTER TABLE "Deportista" ADD COLUMN     "Estado" TEXT NOT NULL DEFAULT 'Activo';

-- AlterTable
ALTER TABLE "Ejercicio_realizado" ALTER COLUMN "Estado" SET DEFAULT 'Activo',
ALTER COLUMN "Estado" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Tipo_de_ejercicio" ADD COLUMN     "Estado" TEXT NOT NULL DEFAULT 'Activo';
