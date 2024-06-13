/*
  Warnings:

  - You are about to drop the column `ID` on the `Deportista` table. All the data in the column will be lost.
  - You are about to drop the column `ID` on the `Tipo_de_ejercicio` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ejercicio_realizado" DROP CONSTRAINT "Ejercicio_realizado_Iddeportista_fkey";

-- DropForeignKey
ALTER TABLE "Ejercicio_realizado" DROP CONSTRAINT "Ejercicio_realizado_Idtipoejercicio_fkey";

-- DropIndex
DROP INDEX "Deportista_ID_key";

-- DropIndex
DROP INDEX "Tipo_de_ejercicio_ID_key";

-- AlterTable
ALTER TABLE "Deportista" DROP COLUMN "ID";

-- AlterTable
ALTER TABLE "Tipo_de_ejercicio" DROP COLUMN "ID";

-- AddForeignKey
ALTER TABLE "Ejercicio_realizado" ADD CONSTRAINT "Ejercicio_realizado_Idtipoejercicio_fkey" FOREIGN KEY ("Idtipoejercicio") REFERENCES "Tipo_de_ejercicio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ejercicio_realizado" ADD CONSTRAINT "Ejercicio_realizado_Iddeportista_fkey" FOREIGN KEY ("Iddeportista") REFERENCES "Deportista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
