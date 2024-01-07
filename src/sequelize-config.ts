const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgresql://postgres:dfDAbFE22BbABd5-AcFG2eagE-B6fgdc@viaduct.proxy.rlwy.net:33063/railway', {
    dialect: 'postgres',
    define: {
        timestamps: true, // Si no deseas que se creen automáticamente las columnas 'createdAt' y 'updatedAt'
    },
});

export default sequelize;
