import express from 'express';

// import controllers
import { addUser, getUser, getUserById, deleteUserById, updateUserById } from '../controllers/users.js';

const router = express.Router();

// get all user.
router.get('/', getUser);

// get by id.
router.get('/:id', getUserById);

// add new user.
router.post('/', addUser);

// delete the user by id.
router.delete('/:id', deleteUserById);

// update the user by id. 
// We can use either put for update more than one values or patch for update only one value.
router.patch('/:id', updateUserById);


export default router;