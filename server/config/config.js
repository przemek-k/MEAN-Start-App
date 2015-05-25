var path = require('path'),
    rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/startapp',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        db: 'mongolabPath',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
};