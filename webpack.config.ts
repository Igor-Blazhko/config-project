import { Configuration } from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import * as path from "path";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin } from "webpack";

interface ENV {
    mode: 'development' | 'production';
}

export default (env: ENV): Configuration => {

    const isDev = env.mode === 'development';

    return {
        mode: env.mode ?? 'development',
        entry: {
            main: path.resolve(__dirname, 'src', 'index.tsx'),
        },
        output: {
            publicPath: path.resolve(__dirname, 'assets'),
            path: path.resolve(__dirname, 'build'),
            filename: isDev ? '[name].js' : '[fullhash].js',
            chunkFilename: '[name].[chunkhash].js',
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                    exclude: /node_modules/
                }
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({ 
                template: path.resolve(__dirname, 'html', 'index.html')
            }),
            isDev ? new ProgressPlugin() : undefined,
        ],
        resolve: {
            extensions: ['.js', '.ts', '.tsx', '.scss'], 
        },
        devServer: isDev ? {
            port:  3000 
        } : undefined,
        devtool: 'inline-source-map'
    };
};
