/*!
 * clout-mongoose
 * Copyright(c) 2015 - 2016 Muhammad Dadu
 * MIT Licensed
 */
const debug = require('debug')('clout-voiceit:hooks/models');
const myVoiceIt = require("VoiceIt");

module.exports = {
	mongoose: {
		event: 'start',
		priority: 'MODEL',
		fn: function (next) {
            if (!this.config.voiceit) {
                debug('voiceit credentials does not exist does not exist');
                return done();
            }

            this.voiceit = myVoiceIt;
            myVoiceIt.initialize(this.config.voiceit.apiKey);

			debug('VoiceIt initialized');
			next();
		}
	}
};
