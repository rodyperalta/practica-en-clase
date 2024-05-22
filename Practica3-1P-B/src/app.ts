import express from 'express';
import { deportistaRouter, ejercicioRealizadoRouter, tipoDeEjercicioRouter } from './Routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/deportista', deportistaRouter);
app.use('/ejercicio-realizados', ejercicioRealizadoRouter);
app.use('/tipos-de-ejercicio', tipoDeEjercicioRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
