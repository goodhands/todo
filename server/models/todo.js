'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  Todo.associate = (models) => {
    Todo.hasMany(models.TodoItem, {
      foreignKey: 'todoId',
      as: 'todoItems'
    });
    Todo.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'userTodos'
    })
  };
  return Todo;
};