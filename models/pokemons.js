// const database = require("./../database");
const Sequelize = require("sequelize");

const sequelize = new Sequelize('Pokemon-API', 'dani', 'admin', {
  dialect: 'postgres'
});

const Pokemon = sequelize.define("pokemons", {
  number: {
    type: Sequelize.INTEGER,
    autoIncrement: false,
    allowNull: false,
    primaryKey: true,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  weight: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  height: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  hability: {
    type: Sequelize.STRING,
    allowNull: false,
  },
},
{
  freezeTableName: true,
  timestamps: false, 
  createdAt: false,
  updatedAt: false,
});

module.exports = Pokemon;