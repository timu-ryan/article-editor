export function buildDevServer(_a) {
    var port = _a.port, open = _a.open;
    var devServer = {
        port: port !== null && port !== void 0 ? port : 3000,
        open: open !== null && open !== void 0 ? open : true,
        // config nginx in prod
        historyApiFallback: true,
    };
    return devServer;
}
