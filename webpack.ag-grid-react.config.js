const merge = require('webpack-merge');
const common = require('./webpack.common.config');

const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
    entry: {
        'ag-grid-react': './src/_assets/ts/ag-grid-react.ts'
    },

    output: {
        filename: '[name].js',
        library: ['agGrid'],
        libraryTarget: 'umd',
        publicPath: '/'
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
        'ag-grid': 'ag-grid',
        'ag-grid/main': 'ag-grid'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },

    plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()]
});
