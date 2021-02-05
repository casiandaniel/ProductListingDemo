const path = require('path');

module.exports = {
    stories: [path.resolve('src/**/*.stories.[tj]s')],
    addons: [
        {
            name: '@storybook/addon-essentials',
            // these addons are disabled because our stories don't have support for them
            options: {
                docs: false,
                actions: false,
                backgrounds: false,
                controls: false,
            },
        },
    ],
    webpackFinal(config) {
        const cssModuleIndex = config.module.rules.findIndex((rule) =>
            rule.test.toString().includes('.css')
        );
        config.module.rules[cssModuleIndex].use[1].options.modules = true;
        config.module.rules.push({
            test: /\.(woff|woff2|ttf)$/,
            use: [
                {
                    loader: 'file-loader',
                    query: {
                        name: '[name].[ext]',
                    },
                },
            ],
        });

        return config;
    },
};
