'use strict'

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('TRANSACTION_TYPES', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true,
    },
    description: {
      type: Sequelize.STRING(100),
    },
  })
}

export async function down(queryInterface) {
  await queryInterface.dropTable('TRANSACTION_TYPES')
}
