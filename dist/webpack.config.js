// запуск: NODE_OPTIONS='--loader ts-node/esm' webpack --env mode=development --config webpack.config.ts
import path from 'path';
import { fileURLToPath } from 'url';
import { buildWebpack } from './config/build/buildWebpack';
import { isBuildPlatform } from './config/build/types/types';
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var config = function (env) {
    var _a, _b;
    if (env === void 0) { env = {}; }
    var paths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };
    var config = buildWebpack({
        port: (_a = env.port) !== null && _a !== void 0 ? _a : 3000,
        mode: (_b = env.mode) !== null && _b !== void 0 ? _b : 'development',
        paths: paths,
        analyzer: env.analyzer,
        platform: isBuildPlatform(env.platform) ? env.platform : "desktop"
    });
    return config;
};
export default config;
