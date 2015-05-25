var mongoose = require('mongoose');

module.exports = function (config) {
    var db, userSchema, User;

    mongoose.connect(config.db);
    db = mongoose.connection;

    db.on('error', console.error.bind(console, 'db connection error..'));
    db.once('open', function () {
        console.log('Connection to startapp database opened');
    });

    userSchema = mongoose.Schema({
        firstName: String,
        lastName: String,
        username: String
    });

    User = mongoose.model('User', userSchema);

    User.find({}).exec(function(err, collection){
        if(collection.length === 0) {
            User.create({
                firstName: 'Przemek',
                lastName: 'Kalka',
                username: 'pkalka'
            });
            User.create({
                firstName: 'Tom',
                lastName: 'Coyote',
                username: 'tcoyote'
            });
            User.create({
                firstName: 'Mark',
                lastName: 'Spectre',
                username: 'mspencer'
            });
        }
    });
};