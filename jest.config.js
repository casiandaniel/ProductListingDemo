const transformNodeModules = ['@magento'];

module.exports = {
    setupFilesAfterEnv: ['./scripts/setupTests.js'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            './__mocks__/fileMock.js',
        '\\.(css|less)$': 'identity-obj-proxy',
    },
    transformIgnorePatterns: [
        `/node_modules/(?!${transformNodeModules.join('|')})`,
    ],
    transform: {
        '\\.js$': 'babel-jest',
    },
};
