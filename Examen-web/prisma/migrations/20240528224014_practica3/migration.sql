/*
  Warnings:

  - You are about to drop the column `Estado` on the `Deportista` table. All the data in the column will be lost.
  - The primary key for the `Ejercicio_realizado` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `Estado` column on the `Ejercicio_realizado` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `Estado` on the `Tipo_de_ejercicio` table. All the data in the column will be lost.
  - Made the column `nombre` on table `Deportista` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Deportista" DROP COLUMN "Estado",
ALTER COLUMN "nombre" SET NOT NULL;

-- AlterTable
ALTER TABLE "Ejercicio_realizado" DROP CONSTRAINT "Ejercicio_realizado_pkey",
DROP COLUMN "Estado",
ADD COLUMN     "Estado" BOOLEAN NOT NULL DEFAULT true,
ADD CONSTRAINT "Ejercicio_realizado_pkey" PRIMARY KEY ("Idtipoejercicio", "Iddeportista");

-- AlterTable
ALTER TABLE "Tipo_de_ejercicio" DROP COLUMN "Estado",
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Tipo_de_ejercicio_id_seq";

-- CreateTable
CREATE TABLE "Secuencia" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "secuencia" INTEGER NOT NULL,

    CONSTRAINT "Secuencia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Secuencia_nombre_key" ON "Secuencia"("nombre");
