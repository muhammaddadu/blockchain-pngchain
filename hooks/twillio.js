/*!
 * clout-mongoose
 * Copyright(c) 2015 - 2016 Muhammad Dadu
 * MIT Licensed
 */
const debug = require('debug')('clout-voiceit:hooks/models');
const twilio = require('twilio');

module.exports = {
	mongoose: {
		event: 'start',
		priority: 'MODEL',
		fn: function (next) {
            if (!this.config.twilio) {
                debug('twilio credentials does not exist does not exist');
                return done();
            }

            this.twilio = new twilio(this.config.twilio.accountSid, this.config.twilio.authToken);

			debug('Twilio initialized');
			next();
		}
	}
};
