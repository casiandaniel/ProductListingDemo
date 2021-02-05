const loose = true;

module.exports = (api) => {
    const isTest = api.env('test');
    const isDev = api.env('development');

    const presets = [
        [
            '@babel/preset-env',
            {
                loose,
                ...(isTest && { targets: { node: 'current' } }),
            },
        ],
        [
            '@babel/preset-react',
            {
                development: isDev,
            },
        ],
    ];

    const plugins = [
        ['@babel/plugin-proposal-class-properties', { loose }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
    ];

    return {
        presets,
        plugins,
    };
};
