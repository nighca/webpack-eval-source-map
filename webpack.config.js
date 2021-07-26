const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
	mode: 'development',
	entry: {
		output: "./index.ts"
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				options: {
					transpileOnly: true
				}
			}
		]
	},
	resolve: {
		extensions: [".ts", ".js", ".json"]
	},
	plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
	devServer: {
    contentBase: './dist',
		hot: true
  },
	devtool: 'eval-source-map'
})
