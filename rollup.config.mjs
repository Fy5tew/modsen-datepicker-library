import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import path from 'path';
import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.cjs.js',
                format: 'cjs',
            },
            {
                file: 'dist/index.esm.js',
                format: 'es',
            },
        ],
        plugins: [
            peerDepsExternal(),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react'],
            }),
            external(),
            resolve(),
            commonjs(),
            image(),
            alias({
                entries: [{ find: '#', replacement: path.resolve('src') }],
            }),
            typescript({
                tsconfig: './tsconfig.json',
            }),
            terser(),
        ],
    },
];
