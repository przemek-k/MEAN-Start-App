var mongoose = require('mongoose'),
    crypto = require('crypto');

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
        username: String,
        salt: String,
        hashed_pwd: String
    });
    userSchema.methods = {
        authenticate: function(pwdToMatch) {
            return hashPwd(this.salt, pwdToMatch) === this.hashed_pwd;
        }
    };

    User = mongoose.model('User', userSchema);

    User.find({}).exec(function(err, collection){
        var salt, hash;
        if(collection.length === 0) {
            salt = createSalt();
            hash = hashPwd(salt, 'pkalka');
            User.create({
                firstName: 'Przemek',
                lastName: 'Kalka',
                username: 'pkalka',
                salt: salt,
                hashed_pwd: hash
            });
            salt = createSalt();
            hash = hashPwd(salt, 'tcoyote');
            User.create({
                firstName: 'Tom',
                lastName: 'Coyote',
                username: 'tcoyote',
                salt: salt,
                hashed_pwd: hash
            });
            salt = createSalt();
            hash = hashPwd(salt, 'mspectre');
            User.create({
                firstName: 'Mark',
                lastName: 'Spectre',
                username: 'mspectre',
                salt: salt,
                hashed_pwd: hash
            });
        }
    });
};

function createSalt() {
    return crypto.randomBytes(128).toString('base64');
}

function hashPwd(salt, pwd) {
    var hmac = crypto.createHmac('sha1', salt);
    return hmac.update(pwd).digest('hex');
}
