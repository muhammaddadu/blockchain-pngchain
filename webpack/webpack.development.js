const {merge} = require('lodash');

module.exports = merge({}, require('./webpack.base'), {
    devtool: 'inline-source-map',
    devServer: {
    	inline: true,
    	progress: true
    },
    watch: true
});
