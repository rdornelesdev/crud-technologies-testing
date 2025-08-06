import express from 'express';
import User from './models/User.js';
import Sequelize from 'sequelize';
import config from './config/database.js';
import userRoutes from './routes.js';

const app = express();
app.use(express.json());

const sequelize = new Sequelize(config); // pega os dados que tem no database, no caso o config é um objeto do Sequelize que tem diversos parâmetros
// console.log(sequelize)
User.init(sequelize);

app.use('/usuarios', userRoutes);
// o userRoutes diz: qualquer rota colo9cada dentro do routes.js vai ser acessada a partir desse /usuarios

sequelize.authenticate().then(()=>{
    app.listen(process.env.PORT, () => console.log('Servidor Online!'));
}).catch(err => {
    console.error(err);
})

