/*!
 * clout-mongoose
 * Copyright(c) 2015 - 2016 Muhammad Dadu
 * MIT Licensed
 */
const debug = require('debug')('clout-mongoose:hooks/models');
const Cryptox = require("cryptox");

module.exports = {
	mongoose: {
		event: 'start',
		priority: 'MODEL',
		fn: function (next) {
			this.exchanges = {
                bitx: new Cryptox("bitx")
            };

			debug('Cryptox initialized');
			next();
		}
	}
};