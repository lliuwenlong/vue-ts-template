// eslint-disable-next-line
const { defineConfig } = require('@vue/cli-service');
// eslint-disable-next-line
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: 'default',
    css: {
        sourceMap: true,
        loaderOptions: {
            postcss: {},
            sass: {},
            less: {}
        }
    },
    configureWebpack: {
        entry: './src/main.ts',
        plugins: [
            new StyleLintPlugin({
                files: ['src/**/*.{vue,htm,html,css,sss,less,scss,sass}'],
                fix: false,
                cache: false,
                emitError: true,
                failOnError: false
            })
        ]
    }
});
