import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'
import webpack from 'webpack'
import TerserPlugin from 'terser-webpack-plugin'


const IS_PROD = process.env.NODE_ENV === 'production'
const { Compiler } = webpack
const config = {
  entry: './src/assets/js/main.js',
  output: {
    filename: '[name].min.js',
    chunkFilename: './chunks/[name].js',
    publicPath: '/assets/js/'
  },
  mode: IS_PROD ? 'production' : 'development',

  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/chunks.css'
    }),

    new webpack.ProgressPlugin((percentage, message) => {
      if (percentage * 100 % 10 === 0) {
        console.log(`${(percentage * 100).toFixed()}% ${message}`);
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: [
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-transform-runtime'
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './src/assets/css',
            },
          },
          "css-loader"
        ],
      },

    ]
  },
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      (compiler = new Compiler()) => {
        new TerserPlugin({
          terserOptions: { format: { comments: false } },
          extractComments: false
        }).apply(compiler)
      }
    ],
    splitChunks: {
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
            if (packageName) return `./vendors/vendor-${packageName[1].replace('@', '')}`;
            else return false
          },
        },
      },
    },
  },
  devtool: IS_PROD ? false : 'eval'
}

export default config