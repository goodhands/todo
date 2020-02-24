'use strict';
module.exports = (sequelize, DataTypes) => {
  const TodoItems = sequelize.define('TodoItems', {
    title: DataTypes.STRING,
    deadline: DataTypes.DATE,
    status: DataTypes.STRING
  }, {});
  TodoItems.associate = (models) => {
    TodoItems.belongsTo(models.Todo, {
      foreignKey: 'todoId',
      onDelete: 'CASCADE'
    })
  };
  return TodoItems;
};