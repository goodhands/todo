'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        name: 'John Doe',
        email: 'john@doe.com',
        password: '12345',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
