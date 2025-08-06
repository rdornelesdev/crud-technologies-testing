// * toda vez que quiser modificar algo no banco chama o model
// * sempre que for fazer uma chamada exterior, como solicitar algo para o banco de dados, api etc, é necessário o uso de async/await na func
import User from '../models/User.js';
import crypto from 'node:crypto'

export const createUser = async (req, res) => {

    try {
        const userToCreate = {
            id: crypto.randomUUID(),
            ...req.body
            // podia usar o spread operator: ...req.body
        }

        const user = await User.create(userToCreate);

        res.status(201).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const updateUser = async (req, res) => {

    try {
        const userToUpdate = await User.update(
            // Argumento 1: O objeto com o nome, age email
            { ...req.body },

            // Argumento 2: O objeto com o 'where'
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.json(userToUpdate)

    } catch (err) {
        console.error(err);
    }
}

export const getAllUsers = async (req, res) => {

    try {
        const userToGet = await User.findAll();
        res.status(200).json(userToGet);

    } catch (err) {
        console.error(err);
    }
}

export const deleteUser = async (req, res) => {

    try {
        const userToDelete = await User.destroy({
            where: {
                id: req.params.id
            }
        })

        res.json(userToDelete);

    } catch (err) {
        res.status(500).json(err);
    }

}