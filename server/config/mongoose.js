var mongoose = require('mongoose');

module.exports = function (config) {
    var db;

    mongoose.connect(config.db);
    db = mongoose.connection;

    db.on('error', console.error.bind(console, 'db connection error..'));
    db.once('open', function () {
        console.log('Connection to startapp database opened');
    });
};