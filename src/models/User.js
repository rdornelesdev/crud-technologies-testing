import Sequelize, { Model } from 'sequelize';
// essa Model vem la do sequelize, ela é uma classe que la dentro dessa classe tem varias ferramentas e métodos, entao vamos precisar deles, e vamos usar herança

class User extends Model {
    // enviar as configurações do sequelize por esse método, pode usar qualquer nome nesse parametro
    // usa o super para pegar as ferramentas e métodos da class Model
    static init(sequelize) {
        super.init(
            {
                // vamos colocar aqui dentro somente colunas que nao sao geradas automaticamente, como id, created_at, updated_at
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
                    unique: true 
                },
            },

            {sequelize} // configurações sequelize que vao chegar no parâmetro da função static init

        ); // inicializa a model, espera receber as configuracoes do meu database.js
    }
}

export default User;