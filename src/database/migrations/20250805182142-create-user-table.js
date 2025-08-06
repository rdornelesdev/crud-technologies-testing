'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // up quando for rodar a migration e der certo 
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('users', {

      id: {
        type: Sequelize.UUID, // UUI = cria um id com numeros e letras aletórios
        allowNull: false, // nao pode ser nulo
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4 // gera automaticamente um nodo UUID aleatório pra preencher essa coluna ID
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true // nao pode repetir o mesmo valor nessa cluna
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });

  },

  // down pra se der errado minha migration de criar a table, neste caso vamos dar umdrop
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  },
};
