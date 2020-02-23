require('./connection');

pool.on('connect', () => {
    console.log('connected to the db');
});