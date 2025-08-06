// config do sequelize

export default {
    dialect: 'postgres',
    host: 'db',
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true // para criar o created_at e update_at em minusculo pelo udnerscored
    }
}