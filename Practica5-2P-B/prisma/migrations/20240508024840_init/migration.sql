-- CreateTable
CREATE TABLE "Ejercicio_realizado" (
    "id" SERIAL NOT NULL,
    "Estado" BOOLEAN NOT NULL DEFAULT true,
    "Idtipoejercicio" INTEGER NOT NULL,
    "Iddeportista" INTEGER NOT NULL,
    "Fecha" TEXT NOT NULL,
    "Hora" TEXT NOT NULL,
    "Tiempo_transcurrido" TEXT NOT NULL,
    "Calorias_quemadas" TEXT NOT NULL,

    CONSTRAINT "Ejercicio_realizado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tipo_de_ejercicio" (
    "id" SERIAL NOT NULL,
    "tipo_de_ejercicio" TEXT NOT NULL,

    CONSTRAINT "Tipo_de_ejercicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deportista" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "peso" TEXT,
    "altura" INTEGER NOT NULL,
    "edad" INTEGER NOT NULL,

    CONSTRAINT "Deportista_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ejercicio_realizado" ADD CONSTRAINT "Ejercicio_realizado_Idtipoejercicio_fkey" FOREIGN KEY ("Idtipoejercicio") REFERENCES "Tipo_de_ejercicio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ejercicio_realizado" ADD CONSTRAINT "Ejercicio_realizado_Iddeportista_fkey" FOREIGN KEY ("Iddeportista") REFERENCES "Deportista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
