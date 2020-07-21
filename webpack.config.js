var path = require('path');


module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    watch: true,
    watchOptions: {
        ignored: ['node_modules/**']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_moduels/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'env', 'stage-1']
                    }
                }
            }
        ]
    }
}
