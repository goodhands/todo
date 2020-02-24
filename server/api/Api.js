const {app, models} =  require('../index');
const sequelize = require('sequelize');
const User = require('../controllers/UserController');

app.listen(3000);

module.exports = {
    app.get('/', User.create)  
}
