const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: __dirname + "/dist",
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Battleships",
		}),
	],
	module: {
		module: {
			loaders: [
				{ exclude: ["node_modules"], loader: "babel", test: /\.jsx?$/ },
				{ loader: "style-loader!css-loader", test: /\.css$/ },
				{ loader: "url-loader", test: /\.gif$/ },
				{ loader: "file-loader", test: /\.(ttf|eot|svg)$/ },
			],
		},
		resolve: {
			alias: {
				config$: "./configs/app-config.js",
				react: "./vendor/react-master",
			},
			extensions: ["", "js", "jsx"],
			modules: [
				"node_modules",
				"bower_components",
				"shared",
				"/shared/vendor/modules",
			],
		},
		rules: [
			{ exclude: ["/node_modules"] },
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				use: {
					loader: "url-loader",
				},
			},
		],
	},
};
