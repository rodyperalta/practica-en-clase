/*
  Warnings:

  - A unique constraint covering the columns `[ID]` on the table `Deportista` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ID]` on the table `Tipo_de_ejercicio` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ID` to the `Deportista` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ID` to the `Tipo_de_ejercicio` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ejercicio_realizado" DROP CONSTRAINT "Ejercicio_realizado_Iddeportista_fkey";

-- DropForeignKey
ALTER TABLE "Ejercicio_realizado" DROP CONSTRAINT "Ejercicio_realizado_Idtipoejercicio_fkey";

-- AlterTable
ALTER TABLE "Deportista" ADD COLUMN     "ID" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Tipo_de_ejercicio" ADD COLUMN     "ID" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Deportista_ID_key" ON "Deportista"("ID");

-- CreateIndex
CREATE UNIQUE INDEX "Tipo_de_ejercicio_ID_key" ON "Tipo_de_ejercicio"("ID");

-- AddForeignKey
ALTER TABLE "Ejercicio_realizado" ADD CONSTRAINT "Ejercicio_realizado_Idtipoejercicio_fkey" FOREIGN KEY ("Idtipoejercicio") REFERENCES "Tipo_de_ejercicio"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ejercicio_realizado" ADD CONSTRAINT "Ejercicio_realizado_Iddeportista_fkey" FOREIGN KEY ("Iddeportista") REFERENCES "Deportista"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
