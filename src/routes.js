import express from 'express';
import { createUser, getAllUsers, deleteUser, updateUser } from './controllers/userController.js'

// isso aqui é o nosso userRoutes do server.js então todas as rotas são /usuarios/< nome > por padrão

const router = express.Router();

router.post('/cadastro', createUser);
router.put('/alterar/:id', updateUser);
router.get('/todos', getAllUsers);
router.delete('/deletar/:id', deleteUser);

export default router;