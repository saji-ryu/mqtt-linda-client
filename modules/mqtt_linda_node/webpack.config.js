module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: 'development',

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: './src/index.js',
    // ファイルの出力設定
    output: {
        //  出力ファイルのディレクトリ名
        path: __dirname +'/dist',
        // 出力ファイル名
        filename: 'main.js',
        library: "mqttLindaClient",
        libraryTarget: "commonjs",
    },
    module: {
        rules: [
            {
                // 拡張子 .js の場合
                test: /\.js$/,
                use: [
                    {
                        // Babel を利用する
                        loader: 'babel-loader',
                        // Babel のオプションを指定する
                        options: {
                            presets: [
                                // env を指定することで、ES2017 を ES5 に変換。
                                // {modules: false}にしないと import 文が Babel によって CommonJS に変換され、
                                // webpack の Tree Shaking 機能が使えない
                                ['env', {'modules': false}]
                            ]
                        }
                    }
                ],
                // node_modules は除外する
                exclude: /node_modules/,
            },{
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {modules: true, sourceMap: true}
                    }
                ]
            }
        ]
    }
};
