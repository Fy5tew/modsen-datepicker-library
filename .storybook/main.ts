import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
    'stories': ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    'addons': [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-onboarding',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
    ],
    'framework': {
        'name': '@storybook/react-webpack5',
        'options': {},
    },
    webpackFinal: async (config) => {
        config.module?.rules?.push({
            test: /\.tsx?$/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env'],
                            ['@babel/preset-react', { runtime: 'automatic' }],
                            ['@babel/preset-typescript'],
                        ],
                    },
                },
            ],
        });
        config.resolve = {
            ...config.resolve,
            alias: {
                ...config?.resolve?.alias,
                '#': path.resolve(__dirname, '../src'),
            },
        };

        return config;
    },
};
export default config;
