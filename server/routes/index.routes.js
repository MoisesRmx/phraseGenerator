import express, { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send(`${process.cwd()}/app/index.html`)
})




export default router;
