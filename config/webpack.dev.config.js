const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const webpack = require('webpack');
const autoHtml = require('../lib/autoHtml.js');

const { entriesList, HtmlWebpackPluginList } = autoHtml('./src/view/','./template');

const dev =  merge(common, {
	mode: 'development',
	entry: entriesList,
	output: {
		filename: 'js/[name].[hash:8].bundle.js',
	},
	plugins: [
		...HtmlWebpackPluginList,
		new webpack.HotModuleReplacementPlugin(),
	]
});

module.exports = dev