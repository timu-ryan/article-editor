import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
export function buildPlugins(_a) {
    var mode = _a.mode, paths = _a.paths, analyzer = _a.analyzer, platform = _a.platform;
    var isProd = mode === 'production';
    var isDev = mode === 'development';
    var plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.DefinePlugin({
            __PLATFORM__: JSON.stringify(platform),
        }),
    ];
    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());
    }
    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }));
    }
    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin());
    }
    return plugins;
}
