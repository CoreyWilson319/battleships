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
