module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'airbnb-base',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react'],
    rules: {
        'import/extensions': [
            'error',
            'ignorePackages',
            { js: 'never', jsx: 'never' },
        ],
        'react/jsx-uses-vars': 'error',
        'react/jsx-uses-react': 'error',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'import/no-unresolved': [
            2,
            { caseSensitive: false },
        ],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'react/prop-types': 'off',
        'react/jsx-curly-spacing': [2, { when: 'always', children: true }],
        indent: ['error', 4],
        'max-len': 'off',
        'object-curly-newline': 'off',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
        react: {
            version: 'detect',
        },
    },
};
