// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')


let pathsToClean = [
  'dist',
  'build'
]

let cleanOptions = {
  root:     '/full/webpack/root/path',
  verbose:  true,
  dry:      false
}

const pug = {
	test: /\.pug$/,
	use: [
		{ 
			loader: 'html-loader?attrs=false'
		},

		{
			loader: 'pug-html-loader', 
			options: {
				pretty: true
			}
		}]
};

const babel = {
	test: /\.js$/,exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/, loader: "babel-loader" 
}

const sass = {
	test: /\.(sa|sc|c)ss$/,
	use: [
		{
			loader: MiniCssExtractPlugin.loader,
		},
		'css-loader',
		'sass-loader',
	],
}

const fonts = {
	test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/,
	use: {
		loader: 'file-loader', 
		options: {
			name: 'assets/fonts/[name].[ext]',
			publicPath: function(url) {
				return url.replace(/assets/, '..')
			},
		}
	}
}

const images = {
  test: /\.(png|svg|jpg|gif)$/,
  use: {
		loader: 'file-loader', 
		options: {
			name: 'assets/images/[folder]/[name].[ext]',
			publicPath: function(url) {
				return url.replace(/assets/, '..')
			},
		}
	}
}

const config = {
	entry: { 
		index: './src/pages/index/index.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'assets/js/[name].bundle.js',
		publicPath: "dist",
	},
	optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
	module: {
		rules: [pug, sass, fonts, babel, images],
	},
	plugins: [
		new CleanWebpackPlugin(pathsToClean, cleanOptions),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/pages/index/index.pug',
			inject: false,
		}),
		new CopyWebpackPlugin([{ from: "./src/assets/images/", to: "./assets/images" } ]),
		new MiniCssExtractPlugin({
      filename: 'assets/styles/styles.css',
		}),
		new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] }
    })
		// new BundleAnalyzerPlugin()
	],
	// devServer: {
  //   contentBase: path.join(__dirname, '/dist'),
  //   compress: true,
  //   port: 9000
  // },
};

module.exports = config;