import express from 'express';
import router from './routes/index.routes.js';

const app = express();

app.use('/resources', express.static(`${process.cwd()}/app/resources/`))

app.use(router)

app.use((req, res) => {
  res.status(404).send("<h1>La pagina que buscas no existe, intenta con otra ruta</h1>")
})

export default app;
