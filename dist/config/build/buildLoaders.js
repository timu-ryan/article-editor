import MiniCssExtractPlugin from "mini-css-extract-plugin";
export function buildLoaders(_a) {
    var mode = _a.mode;
    var isProd = mode === 'production';
    var assetRule = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };
    var svgrLoader = {
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true,
                                },
                            },
                        ],
                    },
                },
            },
        ],
    };
    var cssLoader = {
        loader: 'css-loader',
        options: {
            importLoaders: 2,
            modules: {
                auto: /\.module\.\w+$/i,
                mode: 'local',
                localIdentName: isProd ? '[hash:base64:8]' : '[path][name]__[local]',
                namedExport: false,
            },
        },
    };
    var postcssLoader = {
        loader: 'postcss-loader',
    };
    var sassLoader = {
        loader: 'sass-loader',
        options: {
            sourceMap: true,
        },
    };
    var styleRule = {
        test: /\.(sa|sc|c)ss$/,
        use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            cssLoader,
            postcssLoader,
            sassLoader,
        ],
    };
    var tsRule = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'ts-loader',
            options: { transpileOnly: true }
        },
    };
    return [
        assetRule,
        tsRule,
        styleRule,
        svgrLoader,
    ];
}
