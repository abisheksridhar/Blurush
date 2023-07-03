const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
    ],
    entry:path.resolve(__dirname,"public","index.js"),
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js",
        publicPath:'http://localhost:5000/'
    },
    devServer:{
        port:5000,
        hot:true,
        historyApiFallback:true,
        open:true
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/, // .js and .jsx files
                exclude: /node_modules/, // excluding the node_modules folder
                use: {
                  loader: "babel-loader",
                },
              },
              {
                test: /\.(sa|sc|c)ss$/, // styles files
                use: ["style-loader","css-loader","sass-loader"],
              },
              {
                test: /\.(png|svg|jpeg|jpg)$/, // to import images and fonts
                loader: "file-loader",
                options: { limit: false },
              },
        ]
    },
    resolve: {
      alias: {
        '@styles': path.resolve(__dirname, "./assets/styles/"),
        '@atoms': path.resolve(__dirname,'./src/components/atoms/'),
        '@molecules': path.resolve(__dirname,'./src/components/molecules'),
        '@images': path.resolve(__dirname,'./assets/images/'),
        '@pages': path.resolve(__dirname,'./src/components/pages'),
        '@stores': path.resolve(__dirname, './src/stores'),
        '@utils': path.resolve(__dirname,'./src/utils'),
      },
      extensions: ['.js', '.jsx'],
  },
}