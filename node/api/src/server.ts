<<<<<<< HEAD
import express, { response } from 'express';

const app = express();

/**
 * GET => Buscar
 * PUSH => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração específica
 */

app.get('/', (req, res) => {
  return res.json({ message: 'Hello!' });
});

app.post('/', (req, res) => {
  // recebe os dados para salvar
  return res.json({ message: 'Os dados foram salvos com sucesso! ' });
});
=======
import 'reflect-metadata';
import express, { response } from 'express';
import './database';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);
>>>>>>> node

app.listen(3000, () => console.log('Server is up!'));