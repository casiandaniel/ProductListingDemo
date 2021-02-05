import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';

const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
};

const output = {
    sourcemap: true,
    esModule: false,
    globals,
};

const config = [
    {
        input: 'src/index.js',
        output: [
            {
                ...output,
                file: 'dist/cjs/index.js',
                format: 'cjs',
            },
            {
                ...output,
                file: 'dist/es/index.js',
                format: 'es',
            },
        ],
        external: Object.keys(globals),
        plugins: [
            babel({
                exclude: /node-modules/,
                sourceMaps: true,
                rootMode: 'upward',
                runtimeHelpers: true,
                plugins: ['@babel/plugin-transform-runtime'],
            }),
            resolve({
                resolveOnly: [/src/],
                modulesOnly: true,
            }),
            postcss({
                modules: true,
                inject: (id) =>
                    `\nimport styleInject from "style-inject"\nstyleInject(${id})`,
            }),
        ],
    },
];

export default config;
