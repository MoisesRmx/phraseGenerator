import express from 'express';
import router from './routes/index.routes.js';
import path from 'path';

const app = express();

router.use('/src', express.static(path.join(`${process.cwd()}/app/resources/`)))

app.use(router)

app.use((req, res) => {
  res.status(404).send("<h1>La pagina que buscas no existe, intenta con otra ruta</h1>")
})

export default app;
