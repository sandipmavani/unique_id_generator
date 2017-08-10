"use strict"

let previous = 0;

module.exports = (opts) => {

    var currentTime = new Date().getTime();

    var randNumber = Math.random();

    var shuffledString = str_shuffle("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");

    return MD5(currentTime + randNumber + shuffledString);
}
function MD5(string) {
    var crypto = require('crypto');
    var md5crypt = crypto.createHash('md5');
    md5crypt.update(string);
    return md5crypt.digest('hex');
}