const getAlbum  = require('./app');
const argv = require('minimist')(process.argv.slice(2));

getAlbum(argv.album, argv.id);