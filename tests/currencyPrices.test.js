/**
 * Currency Price Test
 */
const request = require('request');
const openSocket =  require('socket.io-client');

describe('Currency Price Test', function () {
    it('get currency prices socket test', function (next) {
        const socket = openSocket('http://localhost:8080');
        socket.on('CURRENCY_PRICES', (prices) => {
            console.log(prices);
            socket.destroy();
            next();
        });
        socket.emit('GET_CURRENCY_PRICES', 1000);
    });
});
