import openSocket from 'socket.io-client';
const  socket = openSocket('/');

function subscribeToCurrencyPrices(cb) {
  socket.on('CURRENCY_PRICES', prices => cb(null, prices));
  socket.emit('GET_CURRENCY_PRICES', 1000);
}

export { subscribeToCurrencyPrices };
