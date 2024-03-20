import { Router } from 'express';
import path from 'path'

const router = Router();

router.get('/', (req, res) => {
  try {
    res.status(200).sendFile(path.join(`${process.cwd()}/app/index.html`))
  } catch(err) {
    console.error(err)
  }
})

export default router;
