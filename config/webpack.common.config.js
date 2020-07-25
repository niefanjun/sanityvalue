/**
@type {import('webpack').Configuration}
**/
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = {
	output: {
		filename: 'js/bundle.js',
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
			{
				test: /\.(tsx|ts)$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'images/',
						limit: 8192
					}
				}
			},
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader'
				]
			},{
				test: /\.less$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../',
						}
					},
					'css-loader',
					'postcss-loader',
					'less-loader'
				]
			}
		]
	},
	resolve: {
		alias: {
			'@images': path.resolve(__dirname, '../src/images')
		},
		extensions: ['.js','.ts','.jsx','.tsx']
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].[hash].css',
			chunkFilename: 'css/[id].[hash].css',
		})
	]
}

module.exports = config;