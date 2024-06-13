/*
  Warnings:

  - The primary key for the `Deportista` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Ejercicio_realizado` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Tipo_de_ejercicio` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Ejercicio_realizado" DROP CONSTRAINT "Ejercicio_realizado_Iddeportista_fkey";

-- DropForeignKey
ALTER TABLE "Ejercicio_realizado" DROP CONSTRAINT "Ejercicio_realizado_Idtipoejercicio_fkey";

-- AlterTable
ALTER TABLE "Deportista" DROP CONSTRAINT "Deportista_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Deportista_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Deportista_id_seq";

-- AlterTable
ALTER TABLE "Ejercicio_realizado" DROP CONSTRAINT "Ejercicio_realizado_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "Idtipoejercicio" SET DATA TYPE TEXT,
ALTER COLUMN "Iddeportista" SET DATA TYPE TEXT,
ADD CONSTRAINT "Ejercicio_realizado_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Ejercicio_realizado_id_seq";

-- AlterTable
ALTER TABLE "Tipo_de_ejercicio" DROP CONSTRAINT "Tipo_de_ejercicio_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Tipo_de_ejercicio_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Tipo_de_ejercicio_id_seq";

-- AddForeignKey
ALTER TABLE "Ejercicio_realizado" ADD CONSTRAINT "Ejercicio_realizado_Idtipoejercicio_fkey" FOREIGN KEY ("Idtipoejercicio") REFERENCES "Tipo_de_ejercicio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ejercicio_realizado" ADD CONSTRAINT "Ejercicio_realizado_Iddeportista_fkey" FOREIGN KEY ("Iddeportista") REFERENCES "Deportista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
