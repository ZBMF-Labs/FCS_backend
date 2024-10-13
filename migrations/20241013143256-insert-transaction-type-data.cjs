'use strict'

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('TRANSACTION_TYPES', [
      {
        id: 1,
        name: 'Entrada',
        description: 'Transação de entrada de recursos',
      },
      {
        id: 2,
        name: 'Saída',
        description: 'Transação de saída de recursos',
      },
    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('TRANSACTION_TYPES', null, {})
  },
}
