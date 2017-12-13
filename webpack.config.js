'use strict'

function get_config(env) {
	switch (env) {
		case 'production':
		case 'staging':
			return 'webpack.build'
		case 'test':
			return 'webpack.test'
		default:
			return 'webpack.development'
	}
}

const config = require('./webpack/' + get_config(process.env.NODE_ENV || 'development'));

module.exports = config;
