const {merge} = require('lodash');

module.exports = merge({}, require('./webpack.base'), {
    devtool: 'source-map',
    devServer: {
    	inline: true,
    	progress: true
    }
});
